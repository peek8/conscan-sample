FROM busybox:1.37.0

RUN wget -O /usr/bin/yq https://github.com/mikefarah/yq/releases/download/v4.35.1/yq_linux_amd64 && chmod +x /usr/bin/yq

CMD ["/usr/bin/yq"]