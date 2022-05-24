<template>
  <Header />
  <BlogThreeColumnCards />

  <Container>
    <Pagination />
  </Container>
</template>

<script setup>
import BlogThreeColumnCards from "../../../components/layouts/blog/BlogThreeColumnCards.vue";
import Header from "../../../components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Pagination from "../../../components/nav/Pagination.vue";
</script>