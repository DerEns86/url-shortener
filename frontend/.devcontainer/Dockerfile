FROM node:22

WORKDIR /workspace/frontend

# Install global packages if needed
RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
