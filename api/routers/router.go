package routers

import (
	"net/http"
	"time"

	"github.com/Watson-Sei/auth0-go-next.git/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type", "Origin", "Accept", "*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:3000"
		},
		MaxAge: 12 * time.Hour,
	}))

	router.GET("/public", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"text": "Hello From Public",
		})
	})

	router.GET("/private", middleware.CheckJWT(), func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"text": "Hello From Private",
		})
	})

	return router
}
