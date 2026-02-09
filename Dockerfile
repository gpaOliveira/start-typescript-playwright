FROM mcr.microsoft.com/playwright:v1.57.0-noble as builder

ENV CI=true

RUN groupadd -r appuser && useradd -r -g appuser appuser
RUN mkdir -p /app && chown -R appuser:appuser /app

WORKDIR /app

# Copy as root, then change ownership
COPY --chown=appuser:appuser . ./

# Switch to non-root user
USER appuser

RUN npm install

COPY --chown=appuser:appuser . .

######## Stage 2: Final build stage just to execute tests ########
FROM builder

CMD ["npm", "test"]