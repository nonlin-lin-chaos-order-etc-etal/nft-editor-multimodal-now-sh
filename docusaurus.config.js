module.exports = {
  title: 'nemo: nft-editor-multimodal',
  tagline: 'Multiplatform editor for interactive multimedia reprogrammable multimodal NFTs for https://near.org/ and more.',
  url: 'https://nft-editor-multimodal.now.sh/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nft-editor-multimodal', // Usually your GitHub org/user name.
  projectName: 'nft-editor-multimodal', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'nemo: nft-editor-multimodal',
      logo: {
        alt: 'nemo: nft-editor-multimodal logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docusarus 2 Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nft-editor-multimodal/nft-editor-multimodal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docusarus 2 Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Docusarus 2 Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/nft-editor-multimodal',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/nft-editor-multimodal',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nft-multimodal',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nft-editor-multimodal/nft-editor-multimodal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} nft-editor-multimodal. All Rights Reserved. Built with Docusaurus 2.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/nonlin-lin-chaos-order-etc-etal/nft-editor-multimodal-now-sh/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/nonlin-lin-chaos-order-etc-etal/nft-editor-multimodal-now-sh/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
