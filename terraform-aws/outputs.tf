output "site_url" {
  description = "URL du site Assala Cuir"
  value       = "http://${aws_instance.assala_server.public_ip}:4200"
}

output "api_url" {
  description = "URL de l'API Laravel"
  value       = "http://${aws_instance.assala_server.public_ip}:8000/products"
}

output "ssh_command" {
  description = "Commande SSH"
  value       = "ssh -i ~/.ssh/assala-key ubuntu@${aws_instance.assala_server.public_ip}"
}
