import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyQuad } from "./MyQuad.js";
import { MyTangram } from "./MyTangram.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
    constructor() {
        super();
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.quad = new MyQuad(this);
        this.tangram = new MyTangram(this);

        //------ Applied Material
        this.quadMaterial = new CGFappearance(this);
        this.quadMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.quadMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterial.setShininess(10.0);
        this.quadMaterial.loadTexture('images/default.png');
        this.quadMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.diamondMaterial = new CGFappearance(this);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setShininess(10.0);
        this.diamondMaterial.loadTexture('images/tangram.png');
        this.diamondMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.triangleSmallPurpleMaterial = new CGFappearance(this);
        this.triangleSmallPurpleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangleSmallPurpleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangleSmallPurpleMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangleSmallPurpleMaterial.setShininess(10.0);
        this.triangleSmallPurpleMaterial.loadTexture('images/tangram.png');
        this.triangleSmallPurpleMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.triangleSmallRedMaterial = new CGFappearance(this);
        this.triangleSmallRedMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangleSmallRedMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangleSmallRedMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangleSmallRedMaterial.setShininess(10.0);
        this.triangleSmallRedMaterial.loadTexture('images/tangram.png');
        this.triangleSmallRedMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.triangleBigBlueMaterial = new CGFappearance(this);
        this.triangleBigBlueMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangleBigBlueMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangleBigBlueMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangleBigBlueMaterial.setShininess(10.0);
        this.triangleBigBlueMaterial.loadTexture('images/tangram.png');
        this.triangleBigBlueMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.triangleBigOrangeMaterial = new CGFappearance(this);
        this.triangleBigOrangeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangleBigOrangeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangleBigOrangeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangleBigOrangeMaterial.setShininess(10.0);
        this.triangleBigOrangeMaterial.loadTexture('images/tangram.png');
        this.triangleBigOrangeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.triangleMaterial = new CGFappearance(this);
        this.triangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangleMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangleMaterial.setShininess(10.0);
        this.triangleMaterial.loadTexture('images/tangram.png');
        this.triangleMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.parallelogramMaterial = new CGFappearance(this);
        this.parallelogramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.parallelogramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.parallelogramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.parallelogramMaterial.setShininess(10.0);
        this.parallelogramMaterial.loadTexture('images/tangram.png');
        this.parallelogramMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------

        //------ Textures
        this.texture1 = new CGFtexture(this, 'images/board.jpg');
        this.texture2 = new CGFtexture(this, 'images/floor.png');
        this.texture3 = new CGFtexture(this, 'images/window.jpg');
        //-------

        //-------Objects connected to MyInterface
        this.displayAxis = true;
        this.displayQuad = false;
        this.displayTangram = false;
        this.scaleFactor = 5;
        this.selectedTexture = -1;        
        this.wrapS = 0;
        this.wrapT = 0;

        this.textures = [this.texture1, this.texture2, this.texture3];
        this.texCoords = [0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0];
        this.wrappingMethods = ['REPEAT', 'CLAMP_TO_EDGE', 'MIRRORED_REPEAT'];

        this.textureIds = { 'Board': 0, 'Floor': 1, 'Window': 2 };
        this.wrappingS = { 'Repeat': 0, 'Clamp to edge': 1, 'Mirrored repeat': 2 };
        this.wrappingT = { 'Repeat': 0, 'Clamp to edge': 1, 'Mirrored repeat': 2 };

        // Carregar texturas
        this.mineSide = new CGFtexture(this, 'images/mineSide.png');
        this.mineTop = new CGFtexture(this, 'images/mineTop.png');
        this.mineBottom = new CGFtexture(this, 'images/mineBottom.png');

        // Criar a instância de MyUnitCubeQuad com texturas
        this.cube = new MyUnitCubeQuad(this, this.mineTop, this.mineSide, this.mineSide, this.mineSide, this.mineSide, this.mineBottom);

        // Configurações adicionais
        this.displayCube = true; // Adicione esta variável para o GUI


      }

    initLights() {
        this.lights[0].setPosition(5, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    //Function that resets selected texture in quadMaterial
    updateAppliedTexture() {
        this.quadMaterial.setTexture(this.textures[this.selectedTexture]);
    }

    //Function that updates wrapping mode in quadMaterial
    updateTextureWrapping() {
        this.quadMaterial.setTextureWrap(this.wrappingMethods[this.wrapS], this.wrappingMethods[this.wrapT]);
    }

    //Function that updates texture coordinates in MyQuad
    updateTexCoords() {
        this.quad.updateTexCoords(this.texCoords);
    }

    display() {
  
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        // ---- BEGIN Primitive drawing section

        // Default texture filtering in WebCGF is LINEAR. 
        // Uncomment next line for NEAREST when magnifying, or 
        // add a checkbox in the GUI to alternate in real time
        
        // this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

        if (this.displayQuad) {
            this.quadMaterial.apply();
            this.quad.display();
        }

        if (this.displayTangram) {
            this.diamondMaterial.apply();
            this.parallelogramMaterial.apply();
            this.triangleSmallPurpleMaterial.apply();
            this.triangleSmallRedMaterial.apply();
            this.triangleBigBlueMaterial.apply();
            this.triangleBigOrangeMaterial.apply();
            this.triangleMaterial.apply();
            this.tangram.display();
        }

        if (this.displayCube) {
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
            this.cube.display();
        }

        // ---- END Primitive drawing section
    }
}