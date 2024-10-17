import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-game',
  templateUrl: './local-game.component.html',
  styleUrls: ['./local-game.component.css']
})

export class LocalGameComponent implements OnInit {
  ngOnInit(): void {
    //@ts-ignore
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:
      var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.getElementsByTagName('head')[0].appendChild(meta);

      // var canvas = document.querySelector("#unity-canvas");
      // //@ts-ignore
      // canvas.style.width = "100%";
      // //@ts-ignore
      // canvas.style.height = "100%";
      // //@ts-ignore
      // canvas.style.position = "fixed";
      // document.body.style.textAlign = "left";
    }

    //@ts-ignore
    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "/assets/PongWebGL/Build/PongWebGL.data",
      frameworkUrl: "/assets/PongWebGL/Build/PongWebGL.framework.js",
      codeUrl: "/assets/PongWebGL/Build/PongWebGL.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Pong",
      productVersion: "1.0",
    });
  }
}
