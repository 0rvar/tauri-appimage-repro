# Tauri issue on Linux using AppImage

When running a Tauri app on Linux using an AppImage, `target=_blank` links do not work, and shell::open does not work either.

## Reproduction

```sh
cargo install tauri-cli # if not already installed
cargo tauri build
src-tauri/target/release/bundle/appimage/tauri-appimage-repro_0.0.0_amd64.AppImage
```

Then click the link or the button in the app. Nothing happens when running via the AppImage, but it works when running via the executable directly or running on other platforms.

## Video

[Screencast of issue](repro.webm)
