import { CGFobject } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

/**
 * MyTangram
 * @constructor
 */
export class MyTangram extends CGFobject {
  constructor(scene) {
    super(scene);

    // Criando instâncias das peças do Tangram
    this.diamond = new MyDiamond(scene);
    this.triangle = new MyTriangle(scene);
    this.parallelogram = new MyParallelogram(scene);
    this.triangleSmall1 = new MyTriangleSmall(scene);
    this.triangleSmall2 = new MyTriangleSmall(scene);
    this.triangleBig1 = new MyTriangleBig(scene);
    this.triangleBig2 = new MyTriangleBig(scene);
  }

  display() {
    // **Diamante Verde (Quadrado)**
    this.scene.pushMatrix();
    this.scene.translate(1, 0, 0);
    //this.scene.setDiffuse(0, 1, 0, 1); Color, x/255
    this.diamond.display();
    this.scene.popMatrix();

    // **Paralelogramo Amarelo**
    this.scene.pushMatrix();
    this.scene.translate(0, -1.4, 0);
    this.scene.scale(-1, 1, 1);
    this.scene.rotate(Math.PI / 4, 0, 0, 1); // Ajuste de rotação para alinhar
    //this.scene.setDiffuse(255/255, 157/255, 211/255, 1);
    this.parallelogram.display();
    this.scene.popMatrix();

    // **Triângulo Pequeno Roxo**
    this.scene.pushMatrix();
    this.scene.translate(2, -1, 0);
    this.scene.rotate(Math.PI / 2, 0, 0, 1); // Rotação de 90º
    //this.scene.setDiffuse(171/255, 78/255, 195/255, 1);
    this.triangleSmall1.display();
    this.scene.popMatrix();

    // **Triângulo Pequeno Vermelho**
    this.scene.pushMatrix();
    this.scene.translate(2.7, -1.3, 0);
    this.scene.rotate(Math.PI / 4, 0, 0, 1); // Rotação -90º
    //this.scene.setDiffuse(1, 12/255, 12/255, 1);
    this.triangleSmall2.display();
    this.scene.popMatrix();

    // **Triângulo Médio Rosa**
    this.scene.pushMatrix();
    this.scene.translate(-2.4, 2.4, 0);
    this.scene.rotate(Math.PI / 2, 0, 0, 1); // Ajuste de rotação
    //this.scene.setDiffuse(1, 157/255, 211/255);
    this.triangle.display();
    this.scene.popMatrix();

    // **Triângulo Grande Azul**
    this.scene.pushMatrix();
    this.scene.translate(0, -2, 0);
    this.scene.rotate(-Math.PI/2, 0, 0, 1); // Ajuste de rotação
    //this.scene.setDiffuse(0, 157/255, 1, 1);
    this.triangleBig1.display();
    this.scene.popMatrix();

    // **Triângulo Grande Laranja**
    this.scene.pushMatrix();
    this.scene.translate(1.4, -2.6, 0);
    this.scene.rotate(-Math.PI*3/4, 0, 0, 1); // Ajuste de rotação
    //this.scene.setDiffuse(1, 157/255, 0, 1);
    this.triangleBig2.display();
    this.scene.popMatrix();
  }
}
