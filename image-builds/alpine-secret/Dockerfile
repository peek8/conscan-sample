FROM alpine:edge

ENV GITHUB_TOKEN=ghp_1234567890abcdefghijklmnopqrstuvwxyz6759

# Add secrets file into container
COPY secrets.txt /secrets.txt
COPY rsa.private /rsa.private

CMD ["/bin/bash"]
