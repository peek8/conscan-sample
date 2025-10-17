FROM ubuntu:noble

RUN apt update && apt install -y nginx

# Provide a non-root user (distroless provides user 65532)
USER 65532:65532

CMD ["/usr/bin/nginx"]