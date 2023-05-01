# Pull base image
FROM python:3.10.2-slim-bullseye

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN apk add --no-cache python3
# Set the working directory
WORKDIR /code

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
        python3-dev \
        default-libmysqlclient-dev \
        libxml2-dev \
        libxslt1-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy the Pipfile and Pipfile.lock
COPY Pipfile Pipfile.lock /code/

# Install pipenv and project dependencies
RUN pip install --upgrade pip \
    && pip install pipenv \
    && pipenv install --system

# Copy the application code
COPY . /code/

# Expose port 8000
EXPOSE 8000

# Run the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
