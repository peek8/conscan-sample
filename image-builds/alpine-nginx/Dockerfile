FROM alpine:3.22

RUN apk update && apk add nginx

# Provide a non-root user (distroless provides user 65532)
USER 65532:65532

CMD ["/usr/bin/nginx"]