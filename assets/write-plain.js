const button=document.querySelector('#copy-skill');
const field=document.querySelector('#skill-text');
const status=document.querySelector('#copy-status');
button.addEventListener('click',async()=>{
 try {
  if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
  await navigator.clipboard.writeText(field.value);
  status.textContent='Full Write Plain skill copied.';
 } catch(error){
  field.closest('details').open=true;
  field.focus();field.select();
  status.textContent='Automatic copy is unavailable. The full skill is selected: use your copy shortcut, or download it.';
 }
});
