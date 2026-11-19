/** Fetch the historic gallery from AFII's legacy India domain into this project.
 * Run only with approval from AFII's rights holder and working internet access.
 */
import { mkdir, stat, writeFile, rename, rm } from 'node:fs/promises';
import path from 'node:path';
const target=path.resolve('public/media/archive');
await mkdir(target,{recursive:true});
const base='https://www.afiicorp.com/wp-content/uploads/2021/05';
const slides=Array.from({length:48},(_,i)=>i+1);
let okay=0,failed=0,skipped=0;
async function load(n){
  const output=path.join(target,`slide-${n}.jpeg`);
  try {const old=await stat(output);if(old.size>1000){skipped++;return;}}catch{}
  const controller=new AbortController(); const timeout=setTimeout(()=>controller.abort(),25000);
  const temp=output+'.partial';
  try {
    const res=await fetch(`${base}/Slide${n}-1.jpeg`,{signal:controller.signal,headers:{'User-Agent':'AFII Corporate India Media Archival/1.0'}});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    const data=Buffer.from(await res.arrayBuffer());
    if(data.byteLength<1000||data.byteLength>8_000_000||data[0]!==0xff||data[1]!==0xd8)throw new Error('Invalid or unexpected JPEG payload');
    await writeFile(temp,data);await rename(temp,output);okay++;
    console.log(`OK ${n} (${Math.ceil(data.length/1024)} KB)`);
  } catch(error){failed++;await rm(temp,{force:true}); console.error(`FAILED ${n}: ${error.message}`);}finally{clearTimeout(timeout)}
}
for(let i=0;i<slides.length;i+=4)await Promise.all(slides.slice(i,i+4).map(load));
console.log(`Finished: ${okay} downloaded, ${skipped} present, ${failed} failed`);
console.log('Rebuild the Next.js site after downloading so image paths use the new local assets.');
if(failed)process.exitCode=1;
