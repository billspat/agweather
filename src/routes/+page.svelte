<script lang="ts">
    import heroImage from "$lib/assets/michigan_orchard_morning_by_jeannie_sanders.jpg"
</script>

    <!-- HERO SECTION -->
<main id="main-content" class="flex-grow py-0 px-0 sm:px-0">

<section class="bg-msu-dark text-white py-16 sm:py-20 px-4 sm:px-8 border-b-4 border-emerald-600 ">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-8">
        <h2 class="text-2xl sm:text-3xl tracking-tight text-white mb-6 leading-tight"> <!-- text-3xl sm:text-5xl font-extrabold  -->
            Helping Michigan's grower community make sense of the weather
        </h2>
        <p class="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
            <img src="{heroImage}" alt="Photo of a Michigan Orchard in the morning, by Jeannie Sanders, from Flicker"/>
        </p>
        <!-- 
        <div class="flex flex-wrap gap-4">
            <a href="project-detail.html" class="btn bg-white text-msu-green hover:bg-emerald-50 hover:text-msu-dark font-bold border-none px-6 shadow">
            Explore Our Projects
            </a>
            <a href="publications.html" class="btn btn-outline text-white hover:bg-white/10 border-white px-6">
            Weather Reporting
            </a>  
        </div> 
        -->
        </div>

        <!-- Quick Stats Banner -->
        <!-- <div class="lg:col-span-3 bg-emerald-950/50 backdrop-blur border border-emerald-500/20 p-6 rounded-xl text-white">
        <img src="https://mrcc.purdue.edu/files/cliwatch/state_climatologists/michigan/prcp-7days.png" 
        style="max-width: 100%; height: auto;"
        alt="map of Michigan showing past 7 days of precipation, from the Purdue Midwest regional climate center"
        />
        
        </div> -->
    </div>
</section>

<!-- RESEARCH Links -->
<section class="max-w-7xl mx-auto px-4 sm:px-8 py-16" aria-labelledby="research_ares">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="card bg-white shadow-md border border-slate-200 hover:border-msu-green transition-all">
        <div class="card-body p-6">
            <div class="w-12 h-12 rounded-lg bg-emerald-100 text-msu-green flex items-center justify-center font-bold mb-4" aria-hidden="true">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h3 class="card-title text-xl font-bold text-msu-dark">1. Enviroweather</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
            The Enviroweather Service develops and delivers a sustainable weather-based information system for the state of Michigan. 
            Enviroweather operates and collects readings from nearly 100 industrial-grade weather stations in Michigan that feed models  
            that helps users make pest, plant production, and natural resource management decisions in Michigan.
            </p>
            <div class="card-actions justify-end mt-4">
            <a href="https://enviroweather.msu.edu" class="text-xs font-bold text-msu-green hover:underline">
                enviroweather.msu.edu &rarr;
            </a>
            </div>
        </div>
        </div>

        <div class="card bg-white shadow-md border border-slate-200 hover:border-msu-green transition-all">
        <div class="card-body p-6">
            <div class="w-12 h-12 rounded-lg bg-emerald-100 text-msu-green flex items-center justify-center font-bold mb-4" aria-hidden="true">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
            </div>
            <h3 class="card-title text-xl font-bold text-msu-dark">2. Weather Guidance for Growers</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
            Dr. Andresen presents weather facts and trends during the growing season. 
            </p>
            <div class="card-actions justify-end mt-4">
            <a href="weather" class="text-xs font-bold text-msu-green hover:underline">Learn more &rarr;</a>
            </div>
        </div>
        </div>

        <div class="card bg-white shadow-md border border-slate-200 hover:border-msu-green transition-all">
        <div class="card-body p-6">
            <div class="w-12 h-12 rounded-lg bg-emerald-100 text-msu-green flex items-center justify-center font-bold mb-4" aria-hidden="true">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="card-title text-xl font-bold text-msu-dark">3. MI Offset</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
            With Dr. Michael Keifer, modeled plume dispersion using NARR wind products for 
            Michiagn CAFO siting.</p>
            <p><em>MIOFFSet is currently offline for major rennovations (Fall 2026)</em></p>
            <div class="card-actions justify-end mt-4">
            <a href="https://mioffset-2026-front-end.vercel.app" class="text-xs font-bold text-msu-green hover:underline">MIOFFSet Website &rarr;</a>               
            </div>
        </div>
        </div>

    </div>
</section>


<!-- FUNDING SPONSORS -->
<section class="max-w-7xl mx-auto px-4 sm:px-8 pb-16 text-center" aria-label="Research Sponsors">
    <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 font-sans">Research Supported By</p>
    <div class="flex flex-wrap items-center justify-center gap-8 text-slate-500 font-bold text-sm">
        <span class="p-3 border border-slate-200 rounded-lg bg-white shadow-sm"><a href="https://usda.gov">USDA</a></span>
        <span class="p-3 border border-slate-200 rounded-lg bg-white shadow-sm"><a href="https://www.canr.msu.edu/research/agbioresearch/">Michigan AgBioResearch (MABR)</a></span>
        <span class="p-3 border border-slate-200 rounded-lg bg-white shadow-sm"><a href="https://www.canr.msu.edu/outreach/">MSU Extension</a></span>
        <span class="p-3 border border-slate-200 rounded-lg bg-white shadow-sm"><a href="https://www.canr.msu.edu/project-greeen/">Project GREEEN</a></span>
        <span class="p-3 border border-slate-200 rounded-lg bg-white shadow-sm"><a href="https://www.michigan.gov/mdard">Michigan Department of Agriculture & Rural Development</a></span>
        
    </div>
    </section>

</main>