// $(function() {
//     $("default-ltr-cache-1tgeghn").click(function()
// }

// document.getElementById('accordion-button').addEventListener('click', function() {
//     var icon = this.querySelector('.accordion-button svg.default-ltr-cache-1tgeghn');
//     icon.classList.toggle('rotate');
//   });

$('[data-bs-toggle="collapse"][data-bs-target="#flush-collapseOne"]').on('click', function(){
  $(this).attr('data-state', $(this).attr('data-state')=='close' ? 'open':'close');
  switch( $(this).attr('data-state') ) 
  {
    case 'open':
      $(this).find('.accordion-button .default-ltr-cache-1tgeghn').addClass('default-ltr-cache-vva3m3').removeClass('default-ltr-cache-1tgeghn');
    break;
    case 'close':
      $(this).find('.accordion-button .default-ltr-cache-1tgeghn').addClass('default-ltr-cache-1tgeghn').removeClass('default-ltr-cache-vva3m3');
    break;
  }
});