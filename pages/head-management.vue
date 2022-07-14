<template>
    <div>

        <!-- <Head>
            <Title>Testing</Title>
            <Meta name="description" :content="`My page's ${dynamic} description`" />
            <Link rel="preload" href="/test.txt" as="script" />
        </Head> -->
        <h1>
            Head Management, SEO out-of-the-box???? Nice!
        </h1>
    </div>
</template>

<script setup>
useHead({
    title: `No more 'React App' titles!`,
    meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'product page', content: 'Describe your stores product page here' },
        { name: 'about us page', content: 'Describe your company here and have it picked up by search engines' }
    ],
    bodyAttrs: {
        class: 'test'
    }
})
</script>