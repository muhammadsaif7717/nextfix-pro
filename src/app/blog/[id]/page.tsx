import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogData";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  CheckCircle2,
  Sparkles,
  Phone,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import NextFixLogo from "@/components/NextFixLogo";
import WeFixFooter from "@/components/WeFixFooter";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

async function BlogDetail({ params }: BlogPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col justify-between selection:bg-[#EA580C] selection:text-white">
      {/* Blog Top Header Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <NextFixLogo />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/#blogs"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>

            <Link
              href="/#estimator"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-sm items-center gap-1.5"
            >
              <span>Instant Cost Calculator</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="flex-1 py-10 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-8 font-medium">
            <Link href="/" className="hover:text-[#EA580C] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <Link href="/#blogs" className="hover:text-[#EA580C] transition-colors">
              Our Blogs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="text-[#0F172A] font-semibold truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-xs font-bold text-[#EA580C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#0F172A] leading-[1.15]">
              {post.title}
            </h1>

            {/* Author Meta */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#64748B] border-y border-[#e2e8f0] py-3">
              <span className="flex items-center gap-1.5 font-medium text-[#0F172A]">
                <User className="w-4 h-4 text-[#EA580C]" />
                <span>{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#EA580C]" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#EA580C]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-md mb-12 bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Lead Paragraph */}
          <div className="text-lg sm:text-xl font-medium text-[#334155] leading-relaxed mb-10 pb-8 border-b border-[#e2e8f0]">
            {post.content.lead}
          </div>

          {/* Article Sections */}
          <div className="space-y-10 text-base text-[#334155] leading-relaxed">
            {post.content.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold font-heading text-[#0F172A] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-[#475569] leading-relaxed">
                    {para}
                  </p>
                ))}

                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#EA580C] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Key Takeaways & Protocol</span>
                    </h3>
                    <ul className="space-y-2">
                      {sec.keyTakeaways.map((item, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                          <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Pro Tip Box */}
            <div className="p-6 rounded-2xl bg-orange-50/70 border-l-4 border-[#EA580C] shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                Lab Diagnostic Pro-Tip
              </span>
              <p className="text-sm font-medium text-[#7C2D12] leading-relaxed">
                {post.content.proTip}
              </p>
            </div>
          </div>

          {/* Quick Hardware Diagnostic Callout */}
          <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-slate-950 text-white shadow-xl space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FB923C] block">
                Have A Similar Hardware Fault?
              </span>
              <h3 className="text-2xl font-black font-heading text-white">
                Book a Free Microscopic Diagnostic in Manhattan
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Bring your device to our cleanroom studio at 25 Main St. We provide live microscopic testing, upfront flat-rate pricing, and zero fee if unrepairable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/#estimator"
                className="py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white shadow-lg shadow-[#EA580C]/35 flex items-center justify-center gap-2"
              >
                <span>Calculate Repair Cost</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:18006398349"
                className="py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FB923C]" />
                <span>Call (800) 639-FIX</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-[#e2e8f0]">
            <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-6">
              More Insights From Our Lab
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.id}`}
                  className="group flex flex-col justify-between p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#EA580C]/50 hover:bg-white transition-all shadow-xs hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-200">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#EA580C] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-[#64748B] group-hover:text-[#EA580C] pt-3 flex items-center gap-1">
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <WeFixFooter />
    </div>
  );
}

export default function BlogPostPage(props: BlogPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#EA580C]" />
        </div>
      }
    >
      <BlogDetail {...props} />
    </Suspense>
  );
}
