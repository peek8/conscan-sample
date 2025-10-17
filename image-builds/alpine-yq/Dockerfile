FROM alpine:3.22

RUN wget -O /usr/bin/yq https://github.com/mikefarah/yq/releases/download/v4.35.1/yq_linux_amd64 && chmod +x /usr/bin/yq

CMD ["/usr/bin/yq"]