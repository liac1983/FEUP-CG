import { CGFobject } from '../lib/CGF.js';

/**
 * MyUnitCube
 * @constructor
 * @param scene - Referência para MyScene
 */
export class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            // Vértices do cubo unitário
            -0.5, -0.5,  0.5,   // 0 - Frente Inferior Esquerdo
             0.5, -0.5,  0.5,   // 1 - Frente Inferior Direito
             0.5,  0.5,  0.5,   // 2 - Frente Superior Direito
            -0.5,  0.5,  0.5,   // 3 - Frente Superior Esquerdo
            -0.5, -0.5, -0.5,   // 4 - Trás Inferior Esquerdo
             0.5, -0.5, -0.5,   // 5 - Trás Inferior Direito
             0.5,  0.5, -0.5,   // 6 - Trás Superior Direito
            -0.5,  0.5, -0.5    // 7 - Trás Superior Esquerdo
        ];

        this.indices = [
            
            0, 1, 2,
            2, 3, 0,

            4, 5, 6,
            6, 7, 4,

            6, 2, 3,
            3, 7, 6,

            5, 1, 0,
            0, 4, 5,

            4, 0, 3,
            3, 7, 4,
            
            5, 1, 2,
            2, 6, 5
        ];
        

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}


