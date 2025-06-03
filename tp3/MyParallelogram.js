import { CGFobject } from '../lib/CGF.js';

/**
 * MyParallelogram
 * @constructor

 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0, 0, 0,   // Vértice 0
            1, 1, 0,   // Vértice 1
            2, 0, 0,   // Vértice 2
            3, 1, 0    // Vértice 3
        ];

        // Índices para formar os triângulos (double-sided)
        this.indices = [
            0, 1, 2,  // Triângulo 1 (trás)
            1, 3, 2,  // Triângulo 2 (trás)

            2, 1, 0,  // Triângulo 1 (frente)
            2, 3, 1   // Triângulo 2 (frente)
        ];


        this.normals = [
            0, 0, 1,  // Frente
            0, 0, 1,  
            0, 0, 1,  
            0, 0, 1,  
        
            0, 0, -1, // Trás
            0, 0, -1,  
            0, 0, -1,  
            0, 0, -1   
        ];
        

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
