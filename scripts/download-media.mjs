/** Downloads distinct, illustrative editorial photographs and AFII-owned public team assets.
 *  Safe fallback: patch ships local images; failed requests do not remove them.
 *  Content is not evidence of specific named AFII transactions.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
const media=join(process.cwd(),'public','media');
const samples = [
  ['v2-highway.jpg','https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fit=crop&w=1800&q=88'],
  ['v2-rail.jpg','https://images.unsplash.com/photo-1474487548417-781cb71495f3?fit=crop&w=1800&q=88'],
  ['v2-energy.jpg','https://images.unsplash.com/photo-1509391366360-2e959784a276?fit=crop&w=1800&q=88'],
  ['v2-water.jpg','https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?fit=crop&w=1800&q=88'],
  ['v2-industry.jpg','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=1800&q=88'],
  ['v2-urban.jpg','https://images.unsplash.com/photo-1486325212027-8081e485255e?fit=crop&w=1800&q=88'],
  ['v2-finance.jpg','https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=1800&q=88'],
  ['v2-bid.jpg','https://images.unsplash.com/photo-1497366754035-f200968a6e72?fit=crop&w=1800&q=88'],
  ['v2-government.jpg','https://images.unsplash.com/photo-1519501025264-65ba15a82390?fit=crop&w=1800&q=88'],
  ['v2-aviation.jpg','https://images.unsplash.com/photo-1436491865332-7a61a109cc05?fit=crop&w=1800&q=88'],
  ['v2-transactions.jpg','https://images.unsplash.com/photo-1500534623283-312aade485b7?fit=crop&w=1800&q=88'],
  ['v2-network.jpg','https://images.unsplash.com/photo-1497366811353-6870744d04b2?fit=crop&w=1800&q=88'],
];
const base='https://raw.githubusercontent.com/Afiicorp/afii-capital-homepage-preview/main/public/images/';
const portraits=[
 ['people/kumar-aakash.png','team-kumar-aakash.png'],
 ['people/vinit-vidyarthi.jpeg','team-vinit-vidyarthi.jpeg'],
 ['people/punam-bhasin.jpg','team-punam-bhasin.jpg'],
 ['people/abhijit-avar-sekar.png','team-abhijit-avar-sekar.png'],
 ['people/mahesh-gandhi.png','team-mahesh-gandhi.png'],
 ['people/kirti-gulati.jpg','team-kirti-gulati.jpg'],
 ['people/sidhartha-gandhi.jpeg','team-sidhartha-gandhi.jpeg'],
 ['people/nguyen-thi-thanh-nga.png','team-nguyen-thi-thanh-nga.jpg']
];
let done=0,failed=0;
async function save(entry){
 const [dest,url]=entry, target=join(media,dest);
 try{
  const res=await fetch(url,{headers:{'User-Agent':'AFII-Corporate-India-asset-preparation/2.0'},signal:AbortSignal.timeout(25000)});
  if(!res.ok)throw Error(`HTTP ${res.status}`);
  const type=res.headers.get('content-type')||'';
  if(!type.startsWith('image/'))throw Error(`unexpected content-type ${type}`);
  const b=Buffer.from(await res.arrayBuffer());
  if(b.length<5000||b.length>12000000)throw Error(`unusual image size ${b.length}`);
  await mkdir(dirname(target),{recursive:true}); await writeFile(target,b);
  done++; console.log(`OK ${dest} (${Math.round(b.length/1024)} KB)`);
 }catch(err){failed++;console.warn(`KEEP BUNDLED FALLBACK ${dest}: ${err.message}`)}
}
const all=[...samples.map(([dest,url])=>[dest,url]),...portraits.map(([dest,file])=>[dest,base+file])];
for(let i=0;i<all.length;i+=4){await Promise.all(all.slice(i,i+4).map(save))}
console.log(`AFII V2 images: ${done} downloaded, ${failed} kept as bundled illustration/initials`);
console.log('For publication, AFII must approve media rights, portraits and photo captions. All sector visuals are illustrative.');
