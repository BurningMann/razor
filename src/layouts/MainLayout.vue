<template>
    <div>
        <Header />
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'MainLayout',
  components: {
    Header
  }
}
</script>
