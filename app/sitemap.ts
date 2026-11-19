import type {MetadataRoute} from "next";
import {site,services} from "@/lib/site";
import {transactions} from "@/lib/transactions";
export default function sitemap():MetadataRoute.Sitemap{const paths=["/","/about","/expertise","/industries","/transactions","/group","/people","/offices","/approach","/contact","/privacy-policy","/cookies","/terms","/legal-notice","/transaction-archive"];return [...paths.map(path=>({url:new URL(path,site.siteUrl).toString(),changeFrequency:"monthly" as const,priority:path==="/"?1:0.6})),...services.map(s=>({url:new URL(`/expertise/${s.slug}`,site.siteUrl).toString(),changeFrequency:"yearly" as const,priority:0.6})),...transactions.map(t=>({url:new URL(`/transactions/${t.slug}`,site.siteUrl).toString(),changeFrequency:"yearly" as const,priority:0.5}))]}
