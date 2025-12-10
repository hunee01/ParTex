//ENV VAR
const k = 8.99 * Math.pow(10,2);
const G = 6.67 * Math.pow(10,-10);

//SCENE
const scene = new THREE.Scene(); 
const aspect = 3 / 2;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*3/2, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 50;

//OBJ
const particle = new THREE.Group();

function spawnParticle(q,x,y,vx,vy) {
  const geo = new THREE.CircleGeometry(2,8);
  let mat = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });
  const mesh = new THREE.Mesh(geo, mat);
  
  mesh.userData.charge = 0;
  mesh.userData.netVx = vx;
  mesh.userData.netVy = vy;
  mesh.userData.mass = 0;
  mesh.userData.hadron = 0;
  mesh.userData.decayOrigin = 0;
  
  switch (q) {
    case 0:
      mesh.userData.type = 'n';
      mesh.material.color.setHex(0xffffff);
      mesh.userData.charge = 0;
      mesh.userData.mass = 1836;
      mesh.scale.setScalar(1);
      mesh.userData.hadron = 1;
      break;
    case 1:
      mesh.userData.type = 'p';
      mesh.material.color.setHex(0xff0000);
      mesh.userData.charge = 1.602;
      mesh.userData.mass = 1836;
      mesh.scale.setScalar(1);
      mesh.userData.hadron = 1;
      break;
    case 100:      
      mesh.userData.type = 'e';
      mesh.material.color.setHex(0x0000ff);
      mesh.userData.charge = -1.602;
      mesh.userData.mass = 1;
      mesh.scale.setScalar(0.5);
      mesh.userData.hadron = 0;
      break;
     case 110:
      mesh.userData.type = 'muon';
      mesh.material.color.setHex(0x0080ff);
      mesh.userData.charge = -1.602;
      mesh.userData.mass = 200;
      mesh.scale.setScalar(0.67);
      mesh.userData.hadron = 0;
      break;
    case 120:      
      mesh.userData.type = 'tauon';
      mesh.material.color.setHex(0x00ffff);
      mesh.userData.charge = -1.602;
      mesh.userData.mass = 3500;
      mesh.scale.setScalar(1.5);
      mesh.userData.hadron = 0;
      break;
    case 101:      
      mesh.userData.type = 'ebar';
      mesh.material.color.setHex(0xff0000);
      mesh.userData.charge = 1.602;
      mesh.userData.mass = 1;
      mesh.scale.setScalar(0.5);
      mesh.userData.hadron = 0;
      break;
     case 111:
      mesh.userData.type = 'muonbar';
      mesh.material.color.setHex(0xff0080);
      mesh.userData.charge = 1.602;
      mesh.userData.mass = 200;
      mesh.scale.setScalar(0.67);
      mesh.userData.hadron = 0;
      break;
    case 121:      
      mesh.userData.type = 'tauonbar';
      mesh.material.color.setHex(0xff00ff);
      mesh.userData.charge = 1.602;
      mesh.userData.mass = 3500;
      mesh.scale.setScalar(1.5);
      mesh.userData.hadron = 0;
      break;
    case 200:      
      mesh.userData.type = 'u';
      mesh.material.color.setHex(0xff8080);
      mesh.userData.charge = 1.068;
      mesh.userData.mass = 4.5;
      mesh.scale.setScalar(0.5);
      mesh.userData.hadron = 1;
      break;
    case 210:      
      mesh.userData.type = 'd';
      mesh.material.color.setHex(0x8080ff);
      mesh.userData.charge = -1/3;
      mesh.userData.mass = 9.4;
      mesh.scale.setScalar(0.5);
      mesh.userData.hadron = 1;
      break;
    case 220:      
      mesh.userData.type = 'c';
      mesh.material.color.setHex(0xff80ff);
      mesh.userData.charge = 1.068;
      mesh.userData.mass = 2500;
      mesh.scale.setScalar(0.75);
      mesh.userData.hadron = 1;
      break;
    case 230:      
      mesh.userData.type = 's';
      mesh.material.color.setHex(0x80ff80);
      mesh.userData.charge = -0.534;
      mesh.userData.mass = 200;
      mesh.scale.setScalar(0.75);
      mesh.userData.hadron = 1;
      break;
    case 240:      
      mesh.userData.type = 't';
      mesh.material.color.setHex(0x800000);
      mesh.userData.charge = 1.068;
      mesh.userData.mass = 313103;
      mesh.scale.setScalar(1);
      mesh.userData.hadron = 1;
      break;
    case 250:      
      mesh.userData.type = 'b';
      mesh.material.color.setHex(0x000080);
      mesh.userData.charge = -0.534;
      mesh.userData.mass = 8219;
      mesh.scale.setScalar(1);
      mesh.userData.hadron = 1;
      break;
    case 201:      
      mesh.userData.type = 'ubar';
      mesh.material.color.setHex(0x80ffff);
      mesh.userData.charge = -1.068;
      mesh.userData.mass = 4.5;
      mesh.scale.setScalar(0.5);
      mesh.userData.hadron = 1;
      break;
    case 211:      
      mesh.userData.type = 'dbar';
      mesh.material.color.setHex(0xffff80);
      mesh.userData.charge = 0.534;
      mesh.userData.mass = 9.4;
      mesh.scale.setScalar(0.5);
      mesh.userData.hadron = 1;
      break;
    case 221:      
      mesh.userData.type = 'cbar';
      mesh.material.color.setHex(0x007f00);
      mesh.userData.charge = -1.068;
      mesh.userData.mass = 2500;
      mesh.scale.setScalar(0.75);
      mesh.userData.hadron = 1;
      break;
    case 231:      
      mesh.userData.type = 'sbar';
      mesh.material.color.setHex(0x7f007f);
      mesh.userData.charge = 0.534;
      mesh.userData.mass = 200;
      mesh.scale.setScalar(0.75);
      mesh.userData.hadron = 1;
      break;
    case 241:      
      mesh.userData.type = 'tbar';
      mesh.material.color.setHex(0x007f7f);
      mesh.userData.charge = -1.068;
      mesh.userData.mass = 313103;
      mesh.scale.setScalar(1);
      mesh.userData.hadron = 1;
      break;
    case 251:      
      mesh.userData.type = 'bbar';
      mesh.material.color.setHex(0x7f7f00);
      mesh.userData.charge = 0.534;
      mesh.userData.mass = 8219;
      mesh.scale.setScalar(1);
      mesh.userData.hadron = 1;
      break;
    case 30:
      mesh.userData.type = 'photon';
      mesh.material.color.setHex(0xffcc80);
      mesh.userData.charge = 0;
      mesh.userData.mass = 0;
      mesh.scale.setScalar(0.25);
      mesh.userData.hadron = 0;
      break;
    case 40:
      mesh.userData.type = 'w';
      mesh.material.color.setHex(0xffcc00);
      mesh.userData.charge = 1;
      mesh.userData.mass = 157260;
      mesh.scale.setScalar(1.25);
      mesh.userData.hadron = 0;
      break;
    case 41:
      mesh.userData.type = 'wbar';
      mesh.material.color.setHex(0x00ccff);
      mesh.userData.charge = -1;
      mesh.userData.mass = 157260;
      mesh.scale.setScalar(1.25);
      mesh.userData.hadron = 0;
      break;
    case 50:
      mesh.userData.type = 'z';
      mesh.material.color.setHex(0x808080);
      mesh.userData.charge = 0;
      mesh.userData.mass = 178473;
      mesh.scale.setScalar(1.3);
      mesh.userData.hadron = 0;
      break;
    case 60:
      mesh.userData.type = 'higgs';
      mesh.material.color.setHex(0xffdd00);
      mesh.userData.charge = 0;
      mesh.userData.mass = 244618;
      mesh.scale.setScalar(2);
      mesh.userData.hadron = 0;
      break;
  }
  mesh.position.x = x;
  mesh.position.y = y;
  
  particle.add(mesh);
  scene.add(particle);
}


//LIGHT
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

let deltaZ = 0.5;

//KEY MOVEMENT
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
  var key = event.key;
  if (key == '.') {
    camera.position.y += 2;
  }
  if (key == 'Control') {
    camera.position.y -= 2;
  }
  if (key == 'Alt') {
    camera.position.x -= 2;
  }
  if (key == 'ArrowLeft') {
    camera.position.x += 2;
  }
  light.position = camera.position;
  
  if (key == '=' || key == '+') {
    camera.position.z -= 10;
  }
  if (key == '-') {
    camera.position.z += 10;
  }
  
  if (key == 'n') {
    spawnParticle(0,camera.position.x,camera.position.y,5,0);
  }
  if (key == 'p') {
    spawnParticle(1,camera.position.x,camera.position.y,0,0);
  }
  
  if (key == '1') {
    spawnParticle(100,camera.position.x,camera.position.y,0,0);
  }
  if (key == '2') {
    spawnParticle(110,camera.position.x,camera.position.y,0,0);
  }
  if (key == '3') {
    spawnParticle(120,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'q') {
    spawnParticle(101,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'w') {
    spawnParticle(111,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'e') {
    spawnParticle(121,camera.position.x,camera.position.y,0,0);
  }
  
  if (key == '4') {
    spawnParticle(200,camera.position.x,camera.position.y,0,0);
  }
  if (key == '5') {
    spawnParticle(210,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'r') {
    spawnParticle(201,camera.position.x,camera.position.y,0,0);
  }
  if (key == 't') {
    spawnParticle(211,camera.position.x,camera.position.y,0,0);
  }
  if (key == '6') {
    spawnParticle(220,camera.position.x,camera.position.y,0,0);
  }
  if (key == '7') {
    spawnParticle(230,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'y') {
    spawnParticle(221,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'u') {
    spawnParticle(231,camera.position.x,camera.position.y,0,0);
  }
  if (key == '8') {
    spawnParticle(240,camera.position.x,camera.position.y,0,0);
  }
  if (key == '9') {
    spawnParticle(250,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'i') {
    spawnParticle(241,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'o') {
    spawnParticle(251,camera.position.x,camera.position.y,0,0);
  }
  
  if (key == 'g') {
    spawnParticle(30,camera.position.x,camera.position.y,20*Math.cos(Math.random() * (2 * Math.PI)),20*Math.sin(Math.random() * (2 * Math.PI)));
  }
  if (key == 'h') {
    spawnParticle(40,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'j') {
    spawnParticle(41,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'k') {
    spawnParticle(50,camera.position.x,camera.position.y,0,0);
  }
  if (key == 'l') {
    spawnParticle(60,camera.position.x,camera.position.y,0,0);
  }
};

for (let i = 0; i < particle.children.length; i++) {
  const cur = particle.children[i];
  console.log("created particle " + cur.uuid + " with type " + cur.userData.type);
}

//ANIMATE
const dt = 0.01;
let render = function() {
  requestAnimationFrame(render);
  
  for (let i = 0; i < particle.children.length; i++) {
    const child = particle.children[i];
    // -- DECAY --
      
    //Neutron Decay
    if (child.userData.type == 'n') {
      let pNear = false;

      for (let k = 0; k < particle.children.length; k++) {
        const other = particle.children[k];
        if (other.userData.type == 'p') {
          let rToP = child.position.distanceTo(other.position);
          if (rToP < 8) {
            pNear = true;
          }
        }
      }

      if (!pNear) {
        if (Math.random() < 0.001) {
          let aprod = Math.random() * (2 * Math.PI);
          spawnParticle(1, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(100, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + Math.PI), child.userData.netVy * Math.sin(aprod + Math.PI));

          particle.remove(child);
        }
      }
    }
    
    //Higgs Decay
    if (child.userData.type == 'higgs') {
      if (Math.random() < 0.5) {
          let aprod = Math.random() * (2 * Math.PI);
          spawnParticle(250, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(251, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));

          particle.remove(child);
      }
    }
    
    //W Decay
    if (child.userData.type == 'w') {
      if (Math.random() < 0.1) {
          let aprod = Math.random() * (2 * Math.PI);
          let decayMode = child.userData.decayOrigin;
          if (child.userData.decayOrigin == 0) {
            decayMode = Math.random();
          }
        
          if (decayMode >= 0.66) {
            spawnParticle(200, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(211, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));
          }
          else if (decayMode >= 0.33) {
            spawnParticle(220, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(231, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));
          }
          else if (decayMode >= 0.22) {
            spawnParticle(100, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          }
          else if (decayMode >= 0.11) {
            spawnParticle(110, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          }
          else {
            spawnParticle(120, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          }

          particle.remove(child);
      }
    }
    else if (child.userData.type == 'wbar') {
      if (Math.random() < 0.1) {
          let aprod = Math.random() * (2 * Math.PI);
          let decayMode = child.userData.decayOrigin;
          if (child.userData.decayOrigin == 0) {
            decayMode = Math.random();
          }
        
          if (decayMode >= 0.66) {
            spawnParticle(201, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(210, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));
          }
          else if (decayMode >= 0.33) {
            spawnParticle(221, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(230, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));
          }
          else if (decayMode >= 0.22) {
            spawnParticle(101, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          }
          else if (decayMode >= 0.11) {
            spawnParticle(111, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          }
          else {
            spawnParticle(121, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          }

          particle.remove(child);
      }
    }
    
    //Muon Decay
    if (child.userData.type == 'muon') {
      if (Math.random() < 0.01) {
          let aprod = Math.random() * (2 * Math.PI);
          spawnParticle(100, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));

          particle.remove(child);
      }
    }
    else if (child.userData.type == 'muonbar') {
      if (Math.random() < 0.01) {
          let aprod = Math.random() * (2 * Math.PI);
          spawnParticle(101, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));

          particle.remove(child);
      }
    }
    
    //Tauon Decay
    if (child.userData.type == 'tauon') {
      if (Math.random() < 0.1) {
          let aprod = Math.random() * (2 * Math.PI);
          spawnParticle(100, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(110, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));
          spawnParticle(200, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + Math.PI), child.userData.netVy * Math.sin(aprod + Math.PI));
          spawnParticle(210, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI * 3/4)), child.userData.netVy * Math.sin(aprod + (Math.PI * 3/4)));
          spawnParticle(201, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + Math.PI), child.userData.netVy * Math.sin(aprod + Math.PI));
          spawnParticle(211, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI * 3/4)), child.userData.netVy * Math.sin(aprod + (Math.PI * 3/4)));

          particle.remove(child);
      }
    }
    else if (child.userData.type == 'tauonbar') {
      if (Math.random() < 0.1) {
          let aprod = Math.random() * (2 * Math.PI);
          spawnParticle(101, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod), child.userData.netVy * Math.sin(aprod));
          spawnParticle(111, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI / 2)), child.userData.netVy * Math.sin(aprod + (Math.PI / 2)));
          spawnParticle(201, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + Math.PI), child.userData.netVy * Math.sin(aprod + Math.PI));
          spawnParticle(211, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI * 3/4)), child.userData.netVy * Math.sin(aprod + (Math.PI * 3/4)));
          spawnParticle(200, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + Math.PI), child.userData.netVy * Math.sin(aprod + Math.PI));
          spawnParticle(210, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), child.userData.netVx * Math.cos(aprod + (Math.PI * 3/4)), child.userData.netVy * Math.sin(aprod + (Math.PI * 3/4)));

          particle.remove(child);
      }
    }
    
    // -- ANNIHILATION --
    for (let h = 0; h < particle.children.length; h++) {
      const anti = particle.children[h];
      if (anti.userData.type === child.userData.type + 'bar') {
        let rToQ = child.position.distanceTo(anti.position);
        if (rToQ <= child.scale.x * 3) {
          spawnParticle(30, child.position.x + (Math.random() * 2 - 1), child.position.y + (Math.random() * 2 - 1), 20*Math.acos(child.userData.netVx) + Math.PI, 20*Math.asin(child.userData.netVy) + Math.PI);
          spawnParticle(30, anti.position.x + (Math.random() * 2 - 1), anti.position.y + (Math.random() * 2 - 1), 20*Math.acos(anti.userData.netVx) - Math.PI, 20*Math.asin(anti.userData.netVy) - Math.PI);
          particle.remove(child);
          particle.remove(anti);
        }
      }
    }
    
    // -- UNIVERSE --
    for (let j = 0; j < particle.children.length; j++) {
      // Electrostatic Force
      const other = particle.children[j];
      
      if (i === j) continue;
      
      let childPos = new THREE.Vector2(child.position.x, child.position.y);
      let otherPos = new THREE.Vector2(other.position.x, other.position.y);
      
      let dx = childPos.x - otherPos.x;
      let dy = childPos.y - otherPos.y;
      
      let r = childPos.distanceTo(otherPos);
      if (r < 0.01) r = 0.01;
      
      let t = Math.atan2(dy,dx);
      
      let Fe = k * (child.userData.charge * other.userData.charge) / Math.pow(r,2);
      let vex = Fe * Math.cos(t) * dt;
      let vey = Fe * Math.sin(t) * dt;
      
      // Strong Nuclear Force
      let vsx = 0;
      let vsy = 0;
      if (child.userData.hadron > 0 && other.userData.hadron > 0) {
        let Fs = 0;
        if (r < 4) {
          Fs = k / Math.pow(r,4);
        } else {
          Fs =  -100 * k / Math.pow(r,4);
        }
        vsx = Fs * Math.cos(t) * dt;
        vsy = Fs * Math.sin(t) * dt;
      }
      
      // Gravity
      let vgx = 0;
      let vgy = 0;
      if (child.userData.mass > 0 && other.userData.mass > 0) {
        let Fg = G * (child.userData.mass * other.userData.mass) / Math.pow(r,2);
        vgx = Fg * Math.cos(t) * dt;
        vgy = Fg * Math.sin(t) * dt;
      }
      
      //Photon Capture
      if (child.userData.type != 'photon' && other.userData.type == 'photon') {
        if (r <= child.scale.x * 2) {
          child.userData.netVx += other.userData.netVy;
          child.userData.netVy += other.userData.netVy;
          
          particle.remove(other);
        }
      }
      
      // -- FINAL FORCE ADDITION --
      child.userData.netVx += vex + vsx + vgx;
      child.userData.netVy += vey + vsy + vgy;
    }
    if (child.userData.mass > 0) {
      child.position.x += child.userData.netVx / child.userData.mass;
      child.position.y += child.userData.netVy / child.userData.mass;
    }
    else {
      child.position.x += child.userData.netVx;
      child.position.y += child.userData.netVy;
    }
  }
  renderer.render(scene, camera);
};
render();
