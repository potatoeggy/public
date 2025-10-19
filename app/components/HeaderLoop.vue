<script setup lang="ts">
const props = defineProps<{ strings: string[]; class?: string }>();
</script>

<template>
  <h1 :class="[props.class, 'text-loop relative text-center w-full h-16']">
    <span class="text absolute w-full" v-for="s in props.strings" :key="s">
      {{ s }}
    </span>
  </h1>
</template>

<style scoped lang="scss">
@use "sass:math";
@mixin text-loop($els) {
  .text-loop {
    overflow: hidden;
    $duration: 3s;

    @if $els > 1 {
      & > span {
        display: block;
        opacity: 0;
        @for $i from 1 through $els {
          &:nth-child(#{$i}) {
            animation: move-test-#{$i} $duration * $els infinite;
          }
        }
      }
    }
  }

  @for $i from 1 through $els {
    @keyframes move-test-#{$i} {
      $interval: calc(100% / $els);
      $upper_bound: $interval * $i;
      $lower_bound: $interval * ($i - 1);

      // we try to make the previous exit and the next enter
      // at the same time, also taking care of negatives

      // for i = 1, this is negative, so start the animation at the end of the cycle
      @if $i > 1 {
        0% {
          opacity: 0;
          transform: translateY(100%);
        }

        #{$lower_bound - $interval * 0.05} {
          opacity: 0;
          transform: translateY(100%);
        }
      }

      #{$lower_bound} {
        opacity: 1;
        transform: translateY(0%);
      }

      #{$lower_bound + $interval * 0.95} {
        opacity: 1;
        transform: translateY(0%);
      }

      #{$upper_bound} {
        opacity: 0;
        transform: translateY(-100%);
      }

      @if $i == 1 {
        // reset el 1
        #{100% - $interval * 0.05} {
          opacity: 0;
          transform: translateY(100%);
        }
        100% {
          opacity: 1;
          transform: translateY(0%);
        }
      } @else {
        100% {
          opacity: 0;
          transform: translateY(-100%);
        }
      }
    }
  }
}

/**
  * For one element, we have the following pattern. To expand it to 2+
  * els, we divide 100% by the number of els and turn on the animation
  * only at the correct time.
  * -5%: invis
  * 0%: vis
  * 95%: vis
  * 100%: invis
  */

@include text-loop(3);
</style>
