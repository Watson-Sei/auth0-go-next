package main

import (
	"github.com/Watson-Sei/auth0-go-next.git/routers"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.DebugMode)
	router := routers.SetupRouter()
	router.Run(":8080")
}
