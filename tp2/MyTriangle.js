import { CGFobject } from '../lib/CGF.js';

/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangle extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -1, 1, 0,    // Vértice 0
            -1, -1, 0,   // Vértice 1
            1, -1, 0     // Vértice 2
        ];

        this.indices = [
            0, 1, 2    // Define o triângulo usando os vértices
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

