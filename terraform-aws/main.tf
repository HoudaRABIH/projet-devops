resource "aws_key_pair" "assala_key" {
  key_name   = "assala-key"
  public_key = file("~/.ssh/assala-key.pub")
}

resource "aws_security_group" "assala_sg" {
  name = "assala-cuir-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 4200
    to_port     = 4200
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "assala_server" {
  ami                    = "ami-02aabe2c1c59b6feb"
  instance_type          = "t3.micro"
  key_name               = aws_key_pair.assala_key.key_name
  vpc_security_group_ids = [aws_security_group.assala_sg.id]

  user_data = <<-EOF
    #!/bin/bash
    apt-get update -y
    apt-get install -y docker.io docker-compose-v2 git
    systemctl start docker
    systemctl enable docker
    usermod -aG docker ubuntu
    git clone https://github.com/HoudaRABIH/projet-devops.git /app
    cd /app
    cp backend/.env.example backend/.env
    sed -i 's/DB_HOST=.*/DB_HOST=db/' backend/.env
    sed -i 's/DB_DATABASE=.*/DB_DATABASE=ecommerce/' backend/.env
    sed -i 's/DB_USERNAME=.*/DB_USERNAME=user/' backend/.env
    sed -i 's/DB_PASSWORD=.*/DB_PASSWORD=password/' backend/.env
    sed -i 's/SESSION_DRIVER=.*/SESSION_DRIVER=file/' backend/.env
    sed -i 's/CACHE_STORE=.*/CACHE_STORE=file/' backend/.env
    docker compose up -d --build
    sleep 60
    docker compose exec -T backend composer install
    docker compose exec -T backend php artisan key:generate
    docker compose exec -T backend php artisan migrate --force
    docker compose exec -T backend php artisan db:seed --class=ProductSeeder --force
  EOF

  tags = {
    Name = "assala-cuir-server"
  }
}
