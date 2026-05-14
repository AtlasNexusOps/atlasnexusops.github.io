# Atlas Nexus — site vitrine

Site public de **Atlas Nexus**, repositionné comme landing page d'acquisition client pour des micro-builds data, dashboards et agents IA opérationnels.

URL live : https://atlasnexusops.github.io/

## Objectif du site

Le site doit convertir un visiteur en prospect clair pour :

- dashboards live ;
- pipelines data ;
- agents IA / bots / workflows opérationnels ;
- audits ou micro-builds rapides.

Le positionnement commercial principal :

> Opérations, Dashboards & Agents IA pour indépendants, équipes et PME.

Le site doit rester crédible, concret et orienté livrables : pas de promesse magique, pas de jargon inutile, pas de paiement crypto frontal en haut de page.

## Stack

- HTML statique
- Tailwind CSS via CDN
- Polices Google Fonts : Rubik + Nunito Sans
- GitHub Pages

Aucun build step n'est nécessaire pour publier la page actuelle.

## Structure des sections

- `Nav` : liens vers réalisations, offres, pourquoi, GitHub.
- `Hero` : proposition de valeur, CTA principal vers les réalisations, CTA secondaire micro-build.
- `Produits` : démonstrations utiles et preuves de capacité.
- `Offres` : trois offres commerciales simples : dashboard live, pipeline data, agent IA opérationnel.
- `Pourquoi Atlas Nexus` : signaux de crédibilité et méthode de livraison.
- `Réalisations` : mini case studies, avec problème, build/stack, output et liens.
- `Méthode` : brief, build, deliver.
- `Paiement` : mention sobre des moyens de paiement, sans wallets visibles.
- `Footer` : contacts et liens.

## Comment modifier

1. Modifier `index.html`.
2. Garder les CTA cohérents :
   - principal : `Voir les réalisations` ;
   - secondaire : `Demander un micro-build` ;
   - ComeUp peut rester présent, mais ne doit pas dominer le hero.
3. Pour ajouter une réalisation, utiliser le format mini case study :
   - Problème ;
   - Build / stack ;
   - Output ;
   - Live demo / GitHub.
4. Pour ajouter une offre, préciser :
   - livrable ;
   - cible ;
   - prix ou cadrage ;
   - lien de contact.
5. Commiter et pousser sur `main`. GitHub Pages publie automatiquement.

## Checklist avant publication

- [ ] Le hero dit clairement ce qui est vendu.
- [ ] Le CTA principal ne renvoie pas vers ComeUp en premier signal.
- [ ] Les offres indiquent un livrable, une cible et un prix de départ.
- [ ] Les réalisations prioritaires ont problème / build / output / liens.
- [ ] Aucun wallet crypto n'est affiché directement sur la homepage.
- [ ] Les liens live et GitHub fonctionnent.
- [ ] Le HTML se parse sans erreur évidente.
- [ ] La version live est vérifiée après déploiement avec cache-buster.

## Déploiement

```bash
git status --short
git add index.html README.md
git commit -m "copy: reposition site as client acquisition landing"
git push origin main
```

Puis vérifier :

```bash
python3 - <<'PY'
from urllib.request import urlopen
url='https://atlasnexusops.github.io/?v=latest'
html=urlopen(url, timeout=20).read().decode('utf-8', 'ignore')
for text in ['Opérations,', 'Demander un micro-build', 'Mini case studies', 'Paiement : ComeUp, PayPal, crypto sur demande']:
    print(text, text in html)
PY
```
