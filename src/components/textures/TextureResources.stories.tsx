import type { Meta } from '@storybook/react';

const meta = {
  title: 'Textures/Texture Resources',
  parameters: {
    docs: {
      description: {
        component: `
# Free Texture Resources for 3D Web Graphics

This document lists high-quality, free texture catalogues with CC0 (public domain) licenses that are compatible with Three.js and WebGL projects.

## Top Texture Libraries

### 1. Poly Haven
**Website:** https://polyhaven.com/textures

**Features:**
- 200+ professionally-made PBR texture sets
- Up to 8K and 16-bit resolution
- PNG format
- CC0 license (public domain - no restrictions)
- No login or registration required
- High quality, artist-curated content

**Best for:** Professional projects requiring high-quality, photorealistic textures

---

### 2. ambientCG
**Website:** https://ambientcg.com/

**Features:**
- 1,300+ seamless PBR materials (one of the largest free libraries)
- Up to 8K resolution (some materials available at even higher resolutions)
- JPG and PNG formats
- CC0 license
- No registration required
- Comprehensive PBR map sets (Color, Normal, Roughness, Displacement, AO)

**Best for:** Large variety of materials, excellent for architectural and industrial textures

---

### 3. CC0 Textures
**Website:** https://cc0-textures.com/

**Features:**
- 100+ CC0 textures and PBR materials
- No registration required
- No hidden fees or strings attached
- Clean, straightforward downloads
- Multiple resolution options

**Best for:** Quick access to commonly-used materials without signup hassle

---

### 4. 3D Textures
**Website:** https://3dtextures.me/

**Features:**
- Free seamless PBR textures
- Complete PBR map sets: Color/Diffuse, Normal, Metallic, Displacement, Roughness, Ambient Occlusion (AO)
- CC0 license
- Compatible with Unity, Unreal, Blender, Three.js, and other engines

**Best for:** Complete PBR workflows with all necessary texture maps

---

### 5. PBR Materials
**Website:** https://pbrmaterials.com/

**Features:**
- High quality PBR materials
- CC0 license
- Free for commercial use
- Clean interface
- Multiple resolution downloads

**Best for:** Commercial projects needing legally-cleared materials

---

### 6. TextureCan
**Website:** https://www.texturecan.com/

**Features:**
- Free PBR CG textures
- Free for commercial use
- Includes both textures and 3D models
- Regular updates

**Best for:** Combined texture and model resources

---

## Three.js Integration Tools

### CC0 Textures Three.js Loader
**GitHub:** https://github.com/repalash/cc0textures-threejs

**Features:**
- Browse 1000+ PBR materials from cc0textures.com
- Direct integration with Three.js
- Works with MeshStandardMaterial and MeshPhysicalMaterial
- Simplifies loading PBR texture sets

---

## File Format Compatibility

All listed sources provide textures in formats compatible with Three.js:

- **PNG** - Lossless, supports transparency, best for normal/roughness/metallic maps
- **JPG** - Compressed, good for color/albedo maps
- **Resolution** - Most sources offer 1K, 2K, 4K, 8K options

---

## Texture Types for PBR Workflows

When downloading textures for physically-based rendering (PBR), look for these maps:

1. **Color/Albedo/Diffuse** - Base color of the material (required)
2. **Normal** - Surface detail and bumps (optional but recommended)
3. **Roughness** - How glossy or matte the surface is (optional)
4. **Metallic** - Whether the surface is metallic or dielectric (optional)
5. **Displacement** - Actual geometry displacement (optional, GPU-intensive)
6. **Ambient Occlusion (AO)** - Shadows in crevices (optional)

For web performance, using Color + Normal + Roughness is often sufficient.

---

## License Information

**CC0 (Creative Commons Zero)** means:
- No copyright restrictions
- Free for commercial use
- No attribution required (though appreciated)
- Can modify, redistribute, and use in any way
- No registration or fees

All resources listed above use CC0 licensing, making them safe for commercial projects.

---

## Additional Resources

**GitHub Gist - Comprehensive List:**
https://gist.github.com/mauricesvay/1330cc530f6ab2ef33eb6a5ea56ef5bd

Maintains an updated list of free PBR texture websites.

---

*Last updated: 2025-11-13*
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

// This is a documentation-only story
export const Documentation = {
  render: () => (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <p>Please refer to the documentation tab above for texture resource information.</p>
    </div>
  ),
};
