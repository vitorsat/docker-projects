FROM golang:alpine3.19 AS builder

# Define the work directory
WORKDIR /src/app

# Copy all files from local
COPY . .

# Create build file
RUN go build

FROM scratch

# Define the work directory
WORKDIR /src/app

# Copy all files from workdir image golang/builder
COPY --from=builder /src/app .

# Command to exec build file
CMD ["./hello"]

