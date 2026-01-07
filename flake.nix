{
    description = "Next.js Dev Environment";

    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    };

    outputs = { self , nixpkgs ,... }: let
        system = "x86_64-linux";
    in {
        devShells."${system}".default = let
            pkgs = import nixpkgs {
                inherit system;
            };
            in pkgs.mkShell {
            
            packages = with pkgs; [
                nodejs
                yarn
            ];

            buildInputs = with pkgs; [
            ];

            shellHook = ''
                echo "Entered dev env"
            '';
        };
    };
}
