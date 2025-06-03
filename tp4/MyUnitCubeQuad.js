import { CGFobject } from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Referência para MyScene
 * @param {CGFtexture} top - Textura para a face superior (+Y)
 * @param {CGFtexture} front - Textura para a face frontal (+Z)
 * @param {CGFtexture} right - Textura para a face direita (+X)
 * @param {CGFtexture} back - Textura para a face traseira (-Z)
 * @param {CGFtexture} left - Textura para a face esquerda (-X)
 * @param {CGFtexture} bottom - Textura para a face inferior (-Y)
 */
export class MyUnitCubeQuad extends CGFobject {
    constructor(scene, top, front, right, back, left, bottom) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.textures = { top, front, right, back, left, bottom };
    }

    display() {
        // **Face Superior (Top, +Y)**
    if (this.textures.top) {
        this.textures.top.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
    this.scene.pushMatrix();
    this.scene.translate(0, 0.5, 0);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    // **Face Frontal (Front, +Z)**
    if (this.textures.front) {
        this.textures.front.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.quad.display();
    this.scene.popMatrix();

    // **Face Direita (Right, +X)**
    if (this.textures.right) {
        this.textures.right.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
    this.scene.pushMatrix();
    this.scene.translate(0.5, 0, 0);
    this.scene.rotate(Math.PI / 2, 0, 1, 0);
    this.quad.display();
    this.scene.popMatrix();

    // **Face Traseira (Back, -Z)**
    if (this.textures.back) {
        this.textures.back.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
    this.scene.pushMatrix();
    this.scene.translate(0, 0, -0.5);
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.quad.display();
    this.scene.popMatrix();

    // **Face Esquerda (Left, -X)**
    if (this.textures.left) {
        this.textures.left.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
    this.scene.pushMatrix();
    this.scene.translate(-0.5, 0, 0);
    this.scene.rotate(-Math.PI / 2, 0, 1, 0);
    this.quad.display();
    this.scene.popMatrix();

    // **Face Inferior (Bottom, -Y)**
    if (this.textures.bottom) {
        this.textures.bottom.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
    this.scene.pushMatrix();
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();
    }
}
