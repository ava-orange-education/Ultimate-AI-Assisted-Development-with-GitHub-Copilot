// GitHub Copilot Prompt:
// Create a gRPC service for user management

package main

import (
	"context"
	"log"
	"net"

	pb "usermanagement/proto" // Adjust the import path as per your local proto generation
	"google.golang.org/grpc"
)

// server implements pb.UserServiceServer
type server struct {
	pb.UnimplementedUserServiceServer
}

// GetUser implements the GetUser RPC method
func (s *server) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	return &pb.GetUserResponse{
		Id:   req.GetId(),
		Name: "John Doe",
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterUserServiceServer(grpcServer, &server{})

	log.Println("gRPC server is running on port 50051")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
