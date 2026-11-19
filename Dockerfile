FROM thetorproject/snowflake-proxy:v2.15.4 AS upstream

FROM alpine:3.22
RUN apk add --no-cache busybox-extras && addgroup -S snowflake && adduser -S -D -H -G snowflake snowflake
COPY --from=upstream /bin/proxy /usr/bin/snowflake-proxy
COPY --from=upstream /usr/share/tor/ /usr/share/tor/
COPY --chmod=755 dashboard/index.cgi /www/cgi-bin/index.cgi
COPY dashboard/favicon.svg /www/favicon.svg
