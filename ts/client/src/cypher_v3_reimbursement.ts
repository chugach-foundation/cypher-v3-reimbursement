export type CypherV3Reimbursement = {
  version: "0.1.0";
  name: "cypher_v3_reimbursement";
  instructions: [
    {
      name: "createGroup";
      accounts: [
        {
          name: "group";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "Group";
              },
              {
                kind: "arg";
                type: "u32";
                path: "group_num";
              }
            ];
          };
        },
        {
          name: "table";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "groupNum";
          type: "u32";
        },
        {
          name: "claimTransferDestination";
          type: "publicKey";
        },
        {
          name: "testing";
          type: "u8";
        }
      ];
    },
    {
      name: "editGroup";
      accounts: [
        {
          name: "group";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "table";
          type: "publicKey";
        }
      ];
    },
    {
      name: "changeAuthority";
      accounts: [
        {
          name: "group";
          isMut: true;
          isSigner: false;
        },
        {
          name: "table";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "newAuthority";
          type: "publicKey";
        }
      ];
    },
    {
      name: "createTable";
      accounts: [
        {
          name: "table";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "Table";
              },
              {
                kind: "arg";
                type: "u32";
                path: "table_num";
              }
            ];
          };
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "tableNum";
          type: "u32";
        }
      ];
    },
    {
      name: "addRows";
      accounts: [
        {
          name: "table";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rows";
          type: {
            vec: {
              defined: "Row";
            };
          };
        }
      ];
    },
    {
      name: "createVault";
      accounts: [
        {
          name: "group";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "claimTransferTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "claimTransferDestination";
          isMut: false;
          isSigner: false;
        },
        {
          name: "claimMint";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "Mint";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "group";
              },
              {
                kind: "arg";
                type: {
                  defined: "usize";
                };
                path: "token_index";
              }
            ];
          };
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "tokenIndex";
          type: {
            defined: "usize";
          };
        }
      ];
    },
    {
      name: "withdrawToAuthority";
      accounts: [
        {
          name: "group";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorityTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "tokenIndex";
          type: {
            defined: "usize";
          };
        }
      ];
    },
    {
      name: "createReimbursementAccount";
      accounts: [
        {
          name: "group";
          isMut: false;
          isSigner: false;
        },
        {
          name: "reimbursementAccount";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "ReimbursementAccount";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "group";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "cypher_account_owner";
              }
            ];
          };
        },
        {
          name: "cypherAccountOwner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "startReimbursement";
      accounts: [
        {
          name: "group";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "reimburse";
      docs: [
        "Disclaimer:",
        "Please make sure you and your users (of integrating programs) read and accept",
        "the following waiver when reclaiming their funds using below instruction:",
        "",
        "By executing this instruction and accepting the tokens, I hereby",
        "irrevocably sell, convey, transfer and assign to Mango Labs,",
        "LLC all of my right, title and interest in, to and under all",
        "claims arising out of or related to the loss of my tokens in",
        "the October 2022 incident, including, without limitation, all",
        "of my causes of action or other rights with respect to such",
        "claims, all rights to receive any amounts or property or other",
        "distribution in respect of or in connection with such claims,",
        "and any and all proceeds of any of the foregoing (including",
        "proceeds of proceeds). I further irrevocably and",
        "unconditionally release all claims I may have against Mango",
        "Labs, LLC, the Mango Decentralized Autonomous Entity, its core",
        "contributors, and any of their agents, affiliates, officers,",
        "employees, or principals related to this matter. This release",
        "constitutes an express, informed, knowing and voluntary waiver",
        "and relinquishment to the fullest extent permitted by law."
      ];
      accounts: [
        {
          name: "group";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reimbursementAccount";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "ReimbursementAccount";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "group";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "cypher_account_owner";
              }
            ];
          };
        },
        {
          name: "cypherAccountOwner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "claimMintTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "claimMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "table";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "tokenIndex";
          type: {
            defined: "usize";
          };
        },
        {
          name: "indexIntoTable";
          type: {
            defined: "usize";
          };
        },
        {
          name: "transferClaim";
          type: "bool";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "group";
      type: {
        kind: "struct";
        fields: [
          {
            name: "groupNum";
            type: "u32";
          },
          {
            name: "table";
            type: "publicKey";
          },
          {
            name: "claimTransferDestination";
            type: "publicKey";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "vaults";
            type: {
              array: ["publicKey", 16];
            };
          },
          {
            name: "claimMints";
            type: {
              array: ["publicKey", 16];
            };
          },
          {
            name: "mints";
            type: {
              array: ["publicKey", 16];
            };
          },
          {
            name: "reimbursementStarted";
            type: "u8";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "testing";
            type: "u8";
          },
          {
            name: "padding";
            type: {
              array: ["u8", 1];
            };
          }
        ];
      };
    },
    {
      name: "reimbursementAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "reimbursed";
            type: "u16";
          },
          {
            name: "claimTransferred";
            type: "u16";
          },
          {
            name: "padding";
            type: {
              array: ["u8", 4];
            };
          }
        ];
      };
    },
    {
      name: "table";
      type: {
        kind: "struct";
        fields: [
          {
            name: "tableNum";
            type: "u32";
          },
          {
            name: "numRows";
            type: "u32";
          },
          {
            name: "authority";
            type: "publicKey";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Row";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "balances";
            type: {
              array: ["u64", 16];
            };
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "SomeError";
    },
    {
      code: 6001;
      name: "ReimbursementAlreadyStarted";
    },
    {
      code: 6002;
      name: "ReimbursementNotStarted";
    },
    {
      code: 6003;
      name: "TokenAccountNotOwnedByMangoAccountOwner";
    },
    {
      code: 6004;
      name: "AlreadyReimbursed";
    },
    {
      code: 6005;
      name: "BadSigner";
    },
    {
      code: 6006;
      name: "TestingOnly";
    },
    {
      code: 6007;
      name: "TableRowHasWrongOwner";
    },
    {
      code: 6008;
      name: "MustTransferClaim";
    }
  ];
};

export const IDL: CypherV3Reimbursement = {
  version: "0.1.0",
  name: "cypher_v3_reimbursement",
  instructions: [
    {
      name: "createGroup",
      accounts: [
        {
          name: "group",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "Group",
              },
              {
                kind: "arg",
                type: "u32",
                path: "group_num",
              },
            ],
          },
        },
        {
          name: "table",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "groupNum",
          type: "u32",
        },
        {
          name: "claimTransferDestination",
          type: "publicKey",
        },
        {
          name: "testing",
          type: "u8",
        },
      ],
    },
    {
      name: "editGroup",
      accounts: [
        {
          name: "group",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "table",
          type: "publicKey",
        },
      ],
    },
    {
      name: "changeAuthority",
      accounts: [
        {
          name: "group",
          isMut: true,
          isSigner: false,
        },
        {
          name: "table",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "newAuthority",
          type: "publicKey",
        },
      ],
    },
    {
      name: "createTable",
      accounts: [
        {
          name: "table",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "Table",
              },
              {
                kind: "arg",
                type: "u32",
                path: "table_num",
              },
            ],
          },
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tableNum",
          type: "u32",
        },
      ],
    },
    {
      name: "addRows",
      accounts: [
        {
          name: "table",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rows",
          type: {
            vec: {
              defined: "Row",
            },
          },
        },
      ],
    },
    {
      name: "createVault",
      accounts: [
        {
          name: "group",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "claimTransferTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "claimTransferDestination",
          isMut: false,
          isSigner: false,
        },
        {
          name: "claimMint",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "Mint",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "group",
              },
              {
                kind: "arg",
                type: {
                  defined: "usize",
                },
                path: "token_index",
              },
            ],
          },
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tokenIndex",
          type: {
            defined: "usize",
          },
        },
      ],
    },
    {
      name: "withdrawToAuthority",
      accounts: [
        {
          name: "group",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorityTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tokenIndex",
          type: {
            defined: "usize",
          },
        },
      ],
    },
    {
      name: "createReimbursementAccount",
      accounts: [
        {
          name: "group",
          isMut: false,
          isSigner: false,
        },
        {
          name: "reimbursementAccount",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "ReimbursementAccount",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "group",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "cypher_account_owner",
              },
            ],
          },
        },
        {
          name: "cypherAccountOwner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "startReimbursement",
      accounts: [
        {
          name: "group",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "reimburse",
      docs: [
        "Disclaimer:",
        "Please make sure you and your users (of integrating programs) read and accept",
        "the following waiver when reclaiming their funds using below instruction:",
        "",
        "By executing this instruction and accepting the tokens, I hereby",
        "irrevocably sell, convey, transfer and assign to Mango Labs,",
        "LLC all of my right, title and interest in, to and under all",
        "claims arising out of or related to the loss of my tokens in",
        "the October 2022 incident, including, without limitation, all",
        "of my causes of action or other rights with respect to such",
        "claims, all rights to receive any amounts or property or other",
        "distribution in respect of or in connection with such claims,",
        "and any and all proceeds of any of the foregoing (including",
        "proceeds of proceeds). I further irrevocably and",
        "unconditionally release all claims I may have against Mango",
        "Labs, LLC, the Mango Decentralized Autonomous Entity, its core",
        "contributors, and any of their agents, affiliates, officers,",
        "employees, or principals related to this matter. This release",
        "constitutes an express, informed, knowing and voluntary waiver",
        "and relinquishment to the fullest extent permitted by law.",
      ],
      accounts: [
        {
          name: "group",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reimbursementAccount",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "ReimbursementAccount",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "group",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "cypher_account_owner",
              },
            ],
          },
        },
        {
          name: "cypherAccountOwner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "claimMintTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "claimMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "table",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tokenIndex",
          type: {
            defined: "usize",
          },
        },
        {
          name: "indexIntoTable",
          type: {
            defined: "usize",
          },
        },
        {
          name: "transferClaim",
          type: "bool",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "group",
      type: {
        kind: "struct",
        fields: [
          {
            name: "groupNum",
            type: "u32",
          },
          {
            name: "table",
            type: "publicKey",
          },
          {
            name: "claimTransferDestination",
            type: "publicKey",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "vaults",
            type: {
              array: ["publicKey", 16],
            },
          },
          {
            name: "claimMints",
            type: {
              array: ["publicKey", 16],
            },
          },
          {
            name: "mints",
            type: {
              array: ["publicKey", 16],
            },
          },
          {
            name: "reimbursementStarted",
            type: "u8",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "testing",
            type: "u8",
          },
          {
            name: "padding",
            type: {
              array: ["u8", 1],
            },
          },
        ],
      },
    },
    {
      name: "reimbursementAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "reimbursed",
            type: "u16",
          },
          {
            name: "claimTransferred",
            type: "u16",
          },
          {
            name: "padding",
            type: {
              array: ["u8", 4],
            },
          },
        ],
      },
    },
    {
      name: "table",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tableNum",
            type: "u32",
          },
          {
            name: "numRows",
            type: "u32",
          },
          {
            name: "authority",
            type: "publicKey",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "Row",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "balances",
            type: {
              array: ["u64", 16],
            },
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "SomeError",
    },
    {
      code: 6001,
      name: "ReimbursementAlreadyStarted",
    },
    {
      code: 6002,
      name: "ReimbursementNotStarted",
    },
    {
      code: 6003,
      name: "TokenAccountNotOwnedByMangoAccountOwner",
    },
    {
      code: 6004,
      name: "AlreadyReimbursed",
    },
    {
      code: 6005,
      name: "BadSigner",
    },
    {
      code: 6006,
      name: "TestingOnly",
    },
    {
      code: 6007,
      name: "TableRowHasWrongOwner",
    },
    {
      code: 6008,
      name: "MustTransferClaim",
    },
  ],
};
