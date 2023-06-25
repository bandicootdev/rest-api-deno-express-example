FROM denoland/deno:1.34.3

WORKDIR /app

COPY . .

RUN deno cache --unstable index.ts

EXPOSE 3000

CMD ["deno", "run", "-A", "index.ts"]
