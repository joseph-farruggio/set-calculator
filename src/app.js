import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import collapse from '@alpinejs/collapse'
 
Alpine.plugin(persist);
Alpine.plugin(collapse)
 
window.Alpine = Alpine;
 


document.addEventListener('alpine:init', () => {

  Alpine.data('trainer', function () {
    return {
      maxOpen: this.$persist(true),
      max: {
        bench: this.$persist(0),
        squat: this.$persist(0),
        deadlift: this.$persist(0),
        ohp: this.$persist(0),
      },

      movement: this.$persist('squat'),
      percentage: this.$persist(75),

      sets: this.$persist([]),

      addSet() {
        this.sets.push(
          {
            movement: this.movement,
            weight: this.max[this.movement] * this.percentage/100,
            percentage: '('+this.percentage+'%)'
          }
        )
      },

      removeSet(index) {
        this.sets.splice(index, 1)
      }
    }
  });
});

Alpine.start();