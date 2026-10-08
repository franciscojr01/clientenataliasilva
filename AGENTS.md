<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the photography preview as a single editorial page with shared semantic styles and Button variants; this preserves a coherent visual identity.
- Import CDN asset pointers for real uploaded photographs and keep gallery metadata separate from presentation; this prevents binary repository growth and incorrect category assignments.
- Use direct WhatsApp conversation links, not a messaging API; this preview requires no account integration or message storage.
- Render the portfolio in proportional masonry columns with intrinsic image dimensions and unframed category captions; this avoids image cropping and layout shifts.
