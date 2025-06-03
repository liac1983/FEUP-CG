import { CGFobject } from '../lib/CGF.js';

/**
 * MyQuad
 * @constructor
 * @param scene - Referência para MyScene
 */
export class MyQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -0.5, -0.5, 0,   // 0 - Inferior Esquerdo
             0.5, -0.5, 0,   // 1 - Inferior Direito
             0.5,  0.5, 0,   // 2 - Superior Direito
            -0.5,  0.5, 0    // 3 - Superior Esquerdo
        ];

        this.indices = [
            0, 1, 2,
            0, 2, 3
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}


