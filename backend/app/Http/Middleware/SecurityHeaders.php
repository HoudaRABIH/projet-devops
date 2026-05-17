<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        $response->headers->set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; form-action 'self'");
        $response->headers->set('Referrer-Policy', 'no-referrer');
        foreach ($response->headers->getCookies() as $cookie) {
            $response->headers->removeCookie($cookie->getName());
            $new = new \Symfony\Component\HttpFoundation\Cookie(
                $cookie->getName(),
                $cookie->getValue(),
                $cookie->getExpiresTime(),
                $cookie->getPath(),
                $cookie->getDomain(),
                false,
                true,
                false,
                'Strict'
            );
            $response->headers->setCookie($new);
        }
        return $response;
    }
}
