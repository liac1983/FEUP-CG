import { CGFobject } from '../lib/CGF.js';

export class MyPrism extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices; // Número de lados
        this.stacks = stacks; // Número de "andares"
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        let angle = (2 * Math.PI) / this.slices; // Ângulo entre cada fatia
        let stackHeight = 1 / this.stacks; // Altura de cada "andar"

        for (let i = 0; i <= this.stacks; i++) {
            let z = i * stackHeight;

            for (let j = 0; j < this.slices; j++) {
                let x1 = Math.cos(j * angle);
                let y1 = Math.sin(j * angle);
                let x2 = Math.cos((j + 1) * angle);
                let y2 = Math.sin((j + 1) * angle);

                // Criando 2 vértices para cada face lateral, pois normais serão diferentes
                this.vertices.push(x1, y1, z);
                this.vertices.push(x2, y2, z);

                // Normal para a face lateral (perpendicular à face)
                let normalX = Math.cos(j * angle + angle / 2);
                let normalY = Math.sin(j * angle + angle / 2);

                this.normals.push(normalX, normalY, 0);
                this.normals.push(normalX, normalY, 0);
            }
        }

        // Criando os índices para as faces laterais
        for (let i = 0; i < this.stacks; i++) {
            for (let j = 0; j < this.slices; j++) {
                let current = (i * this.slices + j) * 2;
                let next = ((j + 1) % this.slices + i * this.slices) * 2;
                let above = current + this.slices * 2;
                let nextAbove = next + this.slices * 2;

                this.indices.push(current, next, above);
                this.indices.push(next, nextAbove, above);
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
