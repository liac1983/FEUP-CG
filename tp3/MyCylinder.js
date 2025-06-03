import { CGFobject } from '../lib/CGF.js';

export class MyCylinder extends CGFobject {
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
        this.texCoords = [];

        let angle = (2 * Math.PI) / this.slices; // Ângulo entre cada fatia
        let stackHeight = 1 / this.stacks; // Altura de cada "andar"

        // Criando os vértices, normais e coordenadas de textura
        for (let i = 0; i <= this.stacks; i++) {
            let z = i * stackHeight; // Altura da stack

            for (let j = 0; j < this.slices; j++) {
                let x = Math.cos(j * angle);
                let y = Math.sin(j * angle);

                // Adicionando vértices
                this.vertices.push(x, y, z);

                // Normais sempre apontam para fora, radialmente
                this.normals.push(x, y, 0);

                // Coordenadas de textura (s varia de 0 a 1 ao redor do cilindro, t varia de 0 a 1 ao longo da altura)
                this.texCoords.push(j / this.slices, i / this.stacks);
            }
        }

        // Criando os índices para as faces laterais
        for (let i = 0; i < this.stacks; i++) {
            for (let j = 0; j < this.slices; j++) {
                let current = i * this.slices + j;
                let next = (j + 1) % this.slices + i * this.slices;
                let above = current + this.slices;
                let nextAbove = next + this.slices;

                // Dois triângulos por quadrado
                this.indices.push(current, next, above);
                this.indices.push(next, nextAbove, above);
            }
        }

        // Criando tampas superior e inferior
        this.createCaps();

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    createCaps() {
        let bottomCenterIndex = this.vertices.length / 3;
        this.vertices.push(0, 0, 0); // Centro inferior
        this.normals.push(0, 0, -1);
        this.texCoords.push(0.5, 0.5);

        let topCenterIndex = bottomCenterIndex + 1;
        this.vertices.push(0, 0, 1); // Centro superior
        this.normals.push(0, 0, 1);
        this.texCoords.push(0.5, 0.5);

        for (let j = 0; j < this.slices; j++) {
            let next = (j + 1) % this.slices;

            // Tampa inferior (sentido horário)
            this.indices.push(bottomCenterIndex, j, next);

            // Tampa superior (sentido anti-horário)
            let topOffset = this.slices * this.stacks;
            this.indices.push(topCenterIndex, next + topOffset, j + topOffset);
        }
    }
}
