import { CGFobject } from "../lib/CGF.js";
import { CGFappearance } from "../lib/CGF.js";
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


    // Criando materiais para cada peça do Tangram
    this.materialGreen = new CGFappearance(scene);
    this.materialGreen.setAmbient(0, 1, 0, 1);
    this.materialGreen.setDiffuse(0, 1, 0, 1);
    this.materialGreen.setSpecular(1, 1, 1, 1); // Elevada especularidade
    this.materialGreen.setShininess(50);

    this.materialYellow = new CGFappearance(scene);
    this.materialYellow.setAmbient(1, 1, 0, 1);
    this.materialYellow.setDiffuse(1, 1, 0, 1);
    this.materialYellow.setSpecular(1, 1, 1, 1);
    this.materialYellow.setShininess(50);

    this.materialPurple = new CGFappearance(scene);
    this.materialPurple.setAmbient(0.67, 0.31, 0.76, 1);
    this.materialPurple.setDiffuse(0.67, 0.31, 0.76, 1);
    this.materialPurple.setSpecular(1, 1, 1, 1);
    this.materialPurple.setShininess(50);

    this.materialRed = new CGFappearance(scene);
    this.materialRed.setAmbient(1, 0, 0, 1);
    this.materialRed.setDiffuse(1, 0, 0, 1);
    this.materialRed.setSpecular(1, 1, 1, 1);
    this.materialRed.setShininess(50);

    this.materialPink = new CGFappearance(scene);
    this.materialPink.setAmbient(1, 0.6, 0.8, 1);
    this.materialPink.setDiffuse(1, 0.6, 0.8, 1);
    this.materialPink.setSpecular(1, 1, 1, 1);
    this.materialPink.setShininess(50);

    this.materialBlue = new CGFappearance(scene);
    this.materialBlue.setAmbient(0, 0.6, 1, 1);
    this.materialBlue.setDiffuse(0, 0.6, 1, 1);
    this.materialBlue.setSpecular(1, 1, 1, 1);
    this.materialBlue.setShininess(50);

    this.materialOrange = new CGFappearance(scene);
    this.materialOrange.setAmbient(1, 0.5, 0, 1);
    this.materialOrange.setDiffuse(1, 0.5, 0, 1);
    this.materialOrange.setSpecular(1, 1, 1, 1);
    this.materialOrange.setShininess(50);

    this.materialCustom = scene.customMaterial;


  }

  display() {
    // **Diamante Verde (Quadrado)**
    this.scene.pushMatrix();
    this.scene.translate(1, 0, 0);
    //this.scene.setDiffuse(0, 1, 0, 1); Color, x/255
    this.materialCustom.apply();
    this.materialGreen.apply();
    this.diamond.display();
    this.scene.popMatrix();

    // **Paralelogramo Amarelo**
    this.scene.pushMatrix();
    this.scene.translate(0, -1.4, 0);
    this.scene.scale(-1, 1, 1);
    this.scene.rotate(Math.PI / 4, 0, 0, 1); // Ajuste de rotação para alinhar
    //this.scene.setDiffuse(255/255, 157/255, 211/255, 1);
    this.materialYellow.apply();
    this.parallelogram.display();
    this.scene.popMatrix();

    // **Triângulo Pequeno Roxo**
    this.scene.pushMatrix();
    this.scene.translate(2, -1, 0);
    this.scene.rotate(Math.PI / 2, 0, 0, 1); // Rotação de 90º
    //this.scene.setDiffuse(171/255, 78/255, 195/255, 1);
    this.materialPurple.apply();
    this.triangleSmall1.display();
    this.scene.popMatrix();

    // **Triângulo Pequeno Vermelho**
    this.scene.pushMatrix();
    this.scene.translate(2.7, -1.3, 0);
    this.scene.rotate(Math.PI / 4, 0, 0, 1); // Rotação -90º
    //this.scene.setDiffuse(1, 12/255, 12/255, 1);
    this.materialRed.apply();
    this.triangleSmall2.display();
    this.scene.popMatrix();

    // **Triângulo Médio Rosa**
    this.scene.pushMatrix();
    this.scene.translate(-2.4, 2.4, 0);
    this.scene.rotate(Math.PI / 2, 0, 0, 1); // Ajuste de rotação
    //this.scene.setDiffuse(1, 157/255, 211/255);
    this.materialPink.apply();
    this.triangle.display();
    this.scene.popMatrix();

    // **Triângulo Grande Azul**
    this.scene.pushMatrix();
    this.scene.translate(0, -2, 0);
    this.scene.rotate(-Math.PI/2, 0, 0, 1); // Ajuste de rotação
    //this.scene.setDiffuse(0, 157/255, 1, 1);
    this.materialBlue.apply();
    this.triangleBig1.display();
    this.scene.popMatrix();

    // **Triângulo Grande Laranja**
    this.scene.pushMatrix();
    this.scene.translate(1.4, -2.6, 0);
    this.scene.rotate(-Math.PI*3/4, 0, 0, 1); // Ajuste de rotação
    //this.scene.setDiffuse(1, 157/255, 0, 1);
    this.materialOrange.apply();
    this.triangleBig2.display();
    this.scene.popMatrix();
  }

  enableNormalViz(){
    this.diamond.enableNormalViz();
    this.triangle.enableNormalViz();
    this.triangleBig1.enableNormalViz();
    this.triangleBig2.enableNormalViz();
    this.triangleSmall1.enableNormalViz();
    this.triangleSmall2.enableNormalViz();
    this.parallelogram.enableNormalViz();
  };

  disableNormalViz(){
    this.diamond.disableNormalViz();
    this.triangle.disableNormalViz();
    this.triangleBig1.disableNormalViz();
    this.triangleBig2.disableNormalViz();
    this.triangleSmall1.disableNormalViz();
    this.triangleSmall2.disableNormalViz();
    this.parallelogram.disableNormalViz();
  };

}
