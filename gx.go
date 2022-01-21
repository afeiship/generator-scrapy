package gx

import "fmt"

var VERSION = "1.0.0"

func Log(args ...interface{}) {
	for _, param := range args {
		fmt.Printf("%+v ", param)
	}
	fmt.Println("")
}
