import { existsSync } from 'node:fs';
import path from 'node:path';
const assets=['public/media/hero-demo.mp4','public/media/hero-poster.webp','public/media/urban-transport.webp','public/media/renewable-energy.webp'];
const missing=assets.filter(p=>!existsSync(path.resolve(p)));
console.log('AFII Corporate India — Release Preflight');
console.log(`Local demonstration assets: ${missing.length?'MISSING '+missing.join(', '):'present'}`);
for(const [key,label] of [['AFII_ENTITY_APPROVED','Indian legal entity + CIN + address'],['AFII_COMPLIANCE_APPROVED','Legal/privacy/regulatory text'],['AFII_MEDIA_APPROVED','Transaction slides, photography, logos'],['AFII_CONTENT_APPROVED','Public claims, names and transaction statuses']]){
 console.log(`${process.env[key]==='YES'?'APPROVED':'PENDING'}: ${label} (${key})`);
 if(process.env[key]!=='YES')process.exitCode=1;
}
if(missing.length)process.exitCode=1;
if(process.exitCode)console.log('Release gate BLOCKED. This is a working preview, not production-cleared legal publication.');
