// ========================================
// SHOPPING CART - Script Principal
// ========================================

// Sélection du prix total
const totalPriceElement = document.querySelector('.total');

// ========================================
// FONCTION : Calculer le prix total
// ========================================
function updateTotalPrice() {
  let total = 0;

  document.querySelectorAll('.card-body').forEach(product => {
    const unitPrice = parseFloat(
      product.querySelector('.unit-price').textContent.replace('$', '')
    );
    const quantity = parseInt(product.querySelector('.quantity').textContent);

    total += unitPrice * quantity;
  });

  totalPriceElement.textContent = total.toFixed(2) + ' $';
}

// ========================================
// GESTION DES PRODUITS
// ========================================
document.querySelectorAll('.card-body').forEach(product => {
  const plusBtn = product.querySelector('.fa-plus-circle');
  const minusBtn = product.querySelector('.fa-minus-circle');
  const deleteBtn = product.querySelector('.fa-trash-alt');
  const likeBtn = product.querySelector('.fa-heart');
  const quantityElement = product.querySelector('.quantity');

  // ➕ Augmenter la quantité
  plusBtn.addEventListener('click', () => {
    quantityElement.textContent =
      parseInt(quantityElement.textContent) + 1;
    updateTotalPrice();
  });

  // ➖ Diminuer la quantité
  minusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
      updateTotalPrice();
    }
  });

  // 🗑️ Supprimer l’article
  deleteBtn.addEventListener('click', () => {
    product.remove();
    updateTotalPrice();
  });

  // ❤️ Liker / Unliker
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
  });
});

// ========================================
// INITIALISATION
// ========================================
updateTotalPrice();
console.log('🛒 Panier initialisé avec succès');
