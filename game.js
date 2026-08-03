const TEX = "data:image/webp;base64,UklGRmIIAABXRUJQVlA4IFYIAADwJgCdASpgAJAAPwVyq1Arp6Oisdos+XAgiWwAy2BMkXHiRFwP7O3pc/zG7+53D0if67fqN5/n2XR+Fdcb2ZezP94zHsAHWZ6sSwjvd/bEmxgPl9LRE3ALpKdvEPsqPeQ9gnXffK1qhfOT/V+NcFwPVMffb2Prf0qkHPkNdlWuQ24spiCjOAthv5tVz14J0Yjdf+O7K0JlXwwAgIsUDPcavgAmgn90Hea1jOVs6fSWrFMb14KK/jRxnnqUjps4gf8y/+sdUKBvlizXYUwxKgD/RnZen/MPhyGJhA63St4COL6zL87qSfOA9Tk+PX7Kcyo5O/5zIGZ7aX5wm7kCbymhbmtowzr8OyUeMgyFKXk3Drko5+jy+7kXxBSW2rSnlTPRrL4W7vo0hoZhTgZ+6xWZPuEb3FqUUEtsx52rJ4QaAAD+9ZsMSU6fPt1H948sefrZP520NBUGTdlneNvxuvlv7doTMLCep8kmxqekC93MkRUcq8Dzr/7v8WY0ap/aT1oO9BrSOWtKAcSctor/i9zyH2xJkR8XMquG6LDsObuBU0IrN8oDm+48ViF8Xz+23B4gcmKIJGKNOxFKdSrlRIS3VnjuRVn/aBbvjabVqXa2AKE6Gec5atV/c+6H4hFfxaEus6MjnmHTpri4FDR1lHD2OSX35Jz+J0JMvWgkXrZStIh/QUuSfn53yvAwqaUOiAHjgBIDVLFPPg0x9t7RAa9ybHdSwdPK6ZEZC8wiDO6bUEusYmW/epPRBvMm/FCaTUFdRfwY/0EB7RlVa4Noxl0ayDXXSGf4ol4C+LgzUmlu68dxd9pY72YN1nfeVLKNm0PK5wRRtR0AKI77kI03trpGj2n4WO6qAotNjQlOeqr3HpM2guuq6renxcwcRCoahkKIJHq3CMW9FSf6rotegfiJzCRX3awZfnB/vcu+9nv+xv2ETExX58H9NlnDkZmNqkxOJKPFsxj3sIWLmesUqrnGBz8ovcx1tz/9vRd3FPraPOedYB00V3P+gDCqO/9LmX3j2y7KB7zDoPLvrytdHpq7HIJH9DH1DZhszMkt72WH7s94XkXpcMIUKgEI+jXFOHClbe4DTP5wk66kIISItMdZj0IckS2fdwPzwPmJpK3ya86wDDBo/HyadfNS0Wos8ezBVVFG/sHRm1fDpsnUttl3lopmX5hVuQ72S/5sn4GlHrwK119REBBJtSSWMmlmvNyqsnuVbRIfXzGhpxbHI42j4ZyIhj0/Hn81b14a1DGN3RM54F17ZZFIEGvkz6EZbv9itKjpbVA4vyC5HjcyE+8qHdAY9eOQx1NTj2oD/N8JUDO+Dde7wb1CKV0A+e7E4EvAKpE9V5FEJScHWpuie9a2/ZHFnAoLzPCXKqGsm5Jq7pBIdZ9v0Pv46SErZY2Ne8bFX1sGEWbyVG25GlIajN9Cm3gJzmcgbhTfmPADc+TRCZjFXpZh8U12huRHhyQhBxhuTq06+LWihaaUlpiMXeleLRUKaLAUxF+dAokajf9dh5L2psF4UaRLc7EH+bZmexX7UoMVMawFhkZQCth0/1ETq2E7VvaTlw41H2PXfNz/ETNA8lPHmi0/unhYJsaClahEUd5/PixezWxRzRhZ5E1tKPI5dVTCrzsO/fkWIv8KyqJRcgsqR8oGqcRH3pHd/2mSECS7L8Y+4PYgSsfHp7o2i5jT1Jn39IkrzBxDt4c5gDvMoNtDQS2esB0z6zevhbFC6UmxGSWpI/LlXq94BT3PKIH7GdMRoqGXNPBihkN+DYcGgp4YVID/MJB+2ktcxTW1EwNEjcCKXcMkNfYcHLCi2vqCM2DTwqahyqkxCZNRcIGV1VCNXbvzYd1IhMzEMtp0D1Hu2uFVSg02yLUaNE9U17skUNWTbRX4xgHV2Z1ZeDQcTHtT1qzwCXkQN9DNeoVeLoGmoIKOnNtVS6MkSMas2y/MWUb78rcD/q8NZEER/AYC8Y1q/tbLJVFtMcjLSW8LofEpSbY91WH6aIAxGtpK1jNGDNnuWrpNcoxs4lwDkp1EfJa+nbcRXZYbKESUsIgxuyqSYiRe0vWAnB6SwkG+wVK6/4Ad8PZSHLC0h4NVibPMJjg+CQbXs1dKrRmXmqlxe21r+t5WUngeTNdAHwP66d4S2Go747GDJDuw/eXNu8Q2bQwYnb7ag+8/c1ZdtO3r8yf82forxIl1/BykI4asxY8vp6wfMgJnYcNooJQa7IGHEvmpuQ3K9yIJCO4kRgq/AjtRLQzX6uD9asdRjh6NkwyXroVHzENrwSEijHZNjIFe2/6Hr+40YY8QFjrMfAfTRPD9M3MAx67xZi+jFCva4Su9x00ftzLXepgO33r//d8vKjfzAcCqMwqbUXJge8EBB733TugMaP4UjQHDiK5yYDNz45xNeRIVeAsaSYUHiOYHbWml8ZeLSP9K8V+8Iy9YFWMXTAYC0wVbc/R3P+gxtITNJQR2raxQVPHcrUby7e+ADhrYOhltEwlOoDEpIMQJL2Trx+/ACftWSQnaJJXg0jHOvCXOqMsKSHFrmDUdu8GgMgFRjNWWXOnfl+ucCd2Mk5eTfLjVNqBfHMwxQEydgaartQ97cUHzGyJH1zuFbr3sAGmigaAtEm5eMibg0tIQCnJoWcCAawa2+kfQaTb+w2oD9P3b4KxE8/QluQzRNB3EJoeWENPUBA+zSmNOeKtiNKl+gG1tX8uWmeubrEZIVMotbbro076yUY99flGCFTyKRPs6Zza2eBmMhLbmTo+OZmkmJPRC0a0p0gs/muBuokkcJc1U36jfmKEpA0KbHcO3FUnnH8DAEnGzLZUk1fm3Hq8mMcO207GasWn2xmZMrvakQAAA";

let scene,camera,renderer,player;
let enemies=[], bullets=[], score=0;
let keys={x:0,y:0}, started=false;
const loader = new THREE.TextureLoader();

function makeSprite(url,w,h){
 let mat = new THREE.SpriteMaterial({map:loader.load(url), transparent:true});
 let spr = new THREE.Sprite(mat);
 spr.scale.set(w,h,1);
 return spr;
}

function init(){
 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(65, innerWidth/innerHeight, 0.1, 100);
 renderer = new THREE.WebGLRenderer({antialias:true});
 renderer.setSize(innerWidth, innerHeight);
 document.body.appendChild(renderer.domElement);

 scene.add(new THREE.AmbientLight(0xffffff,1));
 let dl = new THREE.DirectionalLight(0xffffff,.8);
 dl.position.set(5,10,5); scene.add(dl);

 let ground = new THREE.Mesh(
 new THREE.PlaneGeometry(80,80),
 new THREE.MeshStandardMaterial({color:0x1a1a35})
 );
 ground.rotation.x = -Math.PI/2;
 scene.add(ground);

 player = new THREE.Group();
 let sp = makeSprite(TEX,1.5,2.4);
 sp.position.y = 1.2;
 player.add(sp);
 player.position.set(0,0,7);
 scene.add(player);

 camera.position.set(0,3.5,8);
 camera.lookAt(player.position);
 spawn(6);

 document.getElementById('preview').src = TEX;
}

function spawn(n){
 for(let i=0;i<n;i++){
 let m = new THREE.Mesh(
 new THREE.SphereGeometry(.5,8,8),
 new THREE.MeshStandardMaterial({color:0x44ff88})
 );
 m.position.set((Math.random()-.5)*24,.5,(Math.random()-.5)*24);
 m.userData={hp:2, s:0.06+Math.random()*.05};
 enemies.push(m); scene.add(m);
 }
}

function shoot(){
 if(!started) return;
 let b = new THREE.Mesh(
 new THREE.SphereGeometry(.12,6,6),
 new THREE.MeshStandardMaterial({color:0xff00ff, emissive:0xff00ff, emissiveIntensity:3})
 );
 b.position.copy(player.position); b.position.y=1;
 b.userData={v:new THREE.Vector3(0,0,-1).multiplyScalar(.65)};
 bullets.push(b); scene.add(b);
}

function update(){
 if(!started) return;
 player.position.x += keys.x*.19;
 player.position.z += keys.y*.19;

 camera.position.x += (player.position.x - camera.position.x)*.07;
 camera.position.z += (player.position.z+6 - camera.position.z)*.07;
 camera.lookAt(player.position.x,1,player.position.z-2);

 for(let i=bullets.length-1;i>=0;i--){
 let b=bullets[i];
 b.position.add(b.userData.v);
 if(b.position.length()>38){scene.remove(b); bullets.splice(i,1); continue;}
 for(let j=enemies.length-1;j>=0;j--){
 let e=enemies[j];
 if(b.position.distanceTo(e.position)<1){
 scene.remove(b); bullets.splice(i,1);
 e.userData.hp--;
 if(e.userData.hp<=0){
 scene.remove(e); enemies.splice(j,1);
 score++; document.getElementById('sc').textContent=score;
 if(enemies.length<3) spawn(4);
 }
 break;
 }
 }
 }
 enemies.forEach(e=>{
 let dir = new THREE.Vector3().subVectors(player.position,e.position).normalize().multiplyScalar(e.userData.s);
 e.position.add(dir);
 });
}

function loop(){requestAnimationFrame(loop); update(); if(renderer) renderer.render(scene,camera);}

const joy=document.getElementById('joy'), stk=document.getElementById('stk');
let active=false;
function handleJoy(e){
 let r=joy.getBoundingClientRect();
 let t=e.touches?e.touches[0]:e;
 let x=t.clientX-r.left-r.width/2, y=t.clientY-r.top-r.height/2;
 let d=Math.sqrt(x*x+y*y), m=36;
 if(d>m){x=x/d*m; y=y/d*m;}
 stk.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
 keys.x=x/m; keys.y=y/m;
}
joy.addEventListener('touchstart',e=>{active=true; handleJoy(e);});
joy.addEventListener('touchmove',e=>{if(active) handleJoy(e);});
joy.addEventListener('touchend',()=>{active=false; stk.style.transform='translate(-50%,-50%)'; keys.x=0; keys.y=0;});
document.getElementById('fire').addEventListener('touchstart',e=>{e.preventDefault(); shoot();});
document.getElementById('play').addEventListener('click',()=>{
 document.getElementById('start').style.display='none';
 started=true; init(); loop();
});
