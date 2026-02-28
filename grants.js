/* ============================================================
   Grant Scanner v4 — Strategic Grant Data
   Scores and framing informed by:
   Planeación Estratégica ALMex 2026
   Programs: CivActs · Integrity · mXc · IECM/PC
   ============================================================ */

window.GRANTS = [
    {
        id: 1,
        name: "Fundación Merced · IDEAS 2026",
        sub: "Democracia, ciudadanía, juventudes · OSC México",
        region: "mexico", regionLabel: "🇲🇽 México",
        align: "high", score: 74,
        status: "open", statusLabel: "⚡ Abierto", statusClass: "badge-urgent",
        deadline: "27 mar 2026", deadlineDate: "2026-03-27",
        amount: "TBD (est. $300–500K MXN)",
        priority: true,
        contact: "fundacionmerced.org.mx/ideas2026",
        note: "Donataria requerida · Cierra 27/03/2026 23:30 CDMX · Cat. 2 jóvenes",
        link: "grant.html?id=1",
        programs: ["CivActs", "IECM/PC"],
        scoreBreakdown: {
            missionAlign: { score: 16, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 18, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 12, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 10, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 8, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 5, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 4, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: [
                "CivActs Yuguelito demuestra trabajo directo con jóvenes 16–29 en periferias de CDMX",
                "Colaboración con IECM posiciona a ALMex como actor en democracia participativa juvenil",
                "Donataria Autorizada vigente — requisito cumplido sin excepción",
                "Integrity Icon muestra alcance 25M+ con jóvenes como audiencia clave",
                "mXc documenta trabajo con jóvenes en situación de vulnerabilidad (Cat. 2 elegible)"
            ],
            en: [
                "CivActs Yuguelito demonstrates direct engagement with youth ages 16–29 in CDMX peripheries",
                "IECM collaboration positions ALMex as a youth democratic participation actor",
                "Active Donataria Autorizada — mandatory requirement fully met",
                "Integrity Icon shows 25M+ reach with youth as key audience",
                "mXc documents work with youth in vulnerable situations (Cat. 2 eligible)"
            ]
        },
        watchPoints: {
            es: [
                "Documentar formalmente grupos/colectivos de jóvenes 12–29 como beneficiarios directos (Cat. 2 req.)",
                "Si constitución >3 años: preparar evidencia de al menos 1 año trabajando con juventudes en redes cívicas",
                "⏰ Cierre 27 marzo — activar inmediatamente el pipeline de propuesta",
                "Confirmar formato y monto elegible en bases PDF (fundacionmerced.org.mx/ideas2026)",
                "Tensión: mXc involucró menores — documentar solo perfiles mayores de 12 en la solicitud"
            ],
            en: [
                "Formally document youth groups/collectives ages 12–29 as direct beneficiaries (Cat. 2 req.)",
                "If org established >3 years: prepare evidence of ≥1 year working with youth in civic networks",
                "⏰ Deadline Mar 27 — activate proposal pipeline immediately",
                "Confirm eligible budget format and cap in PDF bases (fundacionmerced.org.mx/ideas2026)",
                "Tension: mXc involved minors — document only 12+ profiles in the application"
            ]
        },
        framingStrategy: {
            es: {
                headline: "Guardianes Democráticos: Laboratorio de Ciudadanía Juvenil en México",
                body: "Enmarcar desde el trabajo real y documentado de CivActs: grupos de jóvenes que monitorean, co-diseñan y exigen resultados en sus comunidades periféricas. La propuesta conecta el trabajo con el IECM (participación ciudadana institucional) con la acción territorial de base (CivActs/Yuguelito), demostrando que ALMex facilita la ciudadanía juvenil en los dos niveles: institucional y comunitario. El Integrity Icon —con reach de 25M+ y jóvenes como audiencia central— prueba capacidad de amplificación.",
                bullets: [
                    "Unir narrativamente CivActs Yuguelito + IECM como 'dos pisos' de ciudadanía juvenil",
                    "Nombrar Civic Action Teams como 'grupos cívicos juveniles' (Categoría 2)",
                    "Citar datos concretos: # jóvenes alcanzados, # comunidades, cambios documentados",
                    "Evitar framing de 'reconocimiento' (por herencia de Integrity Icon) — priorizar 'práctica colectiva'",
                    "Reducir presupuesto a actividades elegibles sin salarios (talleres, materiales, consultores externos)"
                ]
            },
            en: {
                headline: "Democratic Guardians: A Youth Civic Action Laboratory in Mexico",
                body: "Frame around CivActs' documented work: youth groups who monitor, co-design, and demand results in their peripheral communities. The proposal connects IECM work (institutional civic participation) with grassroots territorial action (CivActs/Yuguelito), demonstrating ALMex facilitates youth citizenship at both levels: institutional and community. Integrity Icon — with 25M+ reach and youth as core audience — proves amplification capacity.",
                bullets: [
                    "Narratively unite CivActs Yuguelito + IECM as 'two floors' of youth citizenship",
                    "Name Civic Action Teams as 'youth civic groups' for Cat. 2 eligibility",
                    "Cite concrete data: # youth reached, # communities, documented changes",
                    "Avoid 'recognition' framing (Integrity Icon legacy) — prioritize 'collective practice'",
                    "Keep budget to eligible activities only: workshops, materials, external consultants (no salaries)"
                ]
            }
        }
    },

    {
        id: 2,
        name: "EU-LAC Global Gateway · Social Accelerator",
        sub: "CAINCO · Innovación social · Consorcio requerido",
        region: "latam", regionLabel: "🌎 LAC",
        align: "medium", score: 58,
        status: "open", statusLabel: "⚡ Registro Activo", statusClass: "badge-open",
        deadline: "Abierto 2026", deadlineDate: "2026-12-31",
        amount: "€100K – €250K",
        priority: false,
        contact: "eulacsocialaccelerator.cainco.org.bo",
        note: "Consorcio multi-país requerido — barrera operativa real para equipo de 4",
        link: "grant.html?id=2",
        programs: ["IECM/PC"],
        scoreBreakdown: {
            missionAlign: { score: 14, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 12, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 11, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 7, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 5, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 3, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 5, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: [
                "Alta alineación temática con fortalecimiento democrático y participación ciudadana",
                "Montos relevantes (€100–250K) para un año de operación regional",
                "Contexto LAC de erosión democrática abre la conversación que ALMex lidera"
            ],
            en: [
                "Strong thematic alignment with democratic strengthening and civic participation",
                "Relevant funding levels (€100–250K) for regional operations",
                "LAC democratic erosion context opens the conversation ALMex leads"
            ]
        },
        watchPoints: {
            es: [
                "Consorcio multi-país obligatorio — ALMex necesita aliado(s) en otros países LAC",
                "Ciclo de 18–24 meses requiere capacidad de gestión que excede equipo actual de 4",
                "Proceso de aplicación complejo — invertir solo si hay consorcio ya formado",
                "Score reducido vs. potencial: la barrera operativa es real, no teórica"
            ],
            en: [
                "Multi-country consortium mandatory — ALMex needs partner(s) in other LAC countries",
                "18–24 month cycle requires management capacity beyond current 4-person team",
                "Complex application process — invest resources only if consortium already formed",
                "Score reduced vs. potential: operational barrier is real, not theoretical"
            ]
        },
        framingStrategy: {
            es: {
                headline: "Red Cívica Latinoamericana: Metodologías de participación ciudadana desde México a la región",
                body: "Si se logra un consorcio: posicionar a ALMex como nodo metodológico — exportando el modelo CivActs y el trabajo con IECM como prácticas replicables en la región. El framing ideal vincula la erosión democrática LAC con la necesidad de innovación cívica local, donde ALMex tiene track record.",
                bullets: [
                    "Solo viable si se construye consorcio con 1-2 aliados regionales probados",
                    "Propuesta ancla: exportar metodología CivActs como bien público regional",
                    "Priorizar 2027 si 2026 no es viable operativamente"
                ]
            },
            en: {
                headline: "Latin American Civic Network: Civic participation methodologies from Mexico to the region",
                body: "If a consortium is built: position ALMex as a methodological hub — exporting the CivActs model and IECM work as replicable practices across the region. The ideal framing links LAC democratic erosion with the need for local civic innovation, where ALMex has a real track record.",
                bullets: [
                    "Only viable if consortium is built with 1-2 proven regional partners",
                    "Anchor proposal: export CivActs methodology as a regional public good",
                    "Prioritize 2027 if operationally not viable for 2026"
                ]
            }
        }
    },

    {
        id: 3,
        name: "Tinker Foundation · Democratic Governance",
        sub: "Justicia y gobernanza democrática · LATAM",
        region: "latam", regionLabel: "🌎 LATAM",
        align: "high", score: 68,
        status: "watch", statusLabel: "Decisión Pendiente", statusClass: "badge-monitor",
        deadline: "Jun 2026 (est.)", deadlineDate: "2026-06-01",
        amount: "$50K – $150K USD",
        priority: false,
        contact: "Caroline Kronley · ckronley@tinker.org",
        note: "LOI enviado ene 2026 · Awaiting full proposal invitation · Decisión estimada Jun 2026",
        link: "grant.html?id=3",
        programs: ["CivActs", "IECM/PC"],
        scoreBreakdown: {
            missionAlign: { score: 15, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 14, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 11, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 9, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 7, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 6, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 5, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: [
                "Alineación muy alta: gobernanza democrática + LATAM es el core de Tinker",
                "LOI ya enviado — ALMex ya está en el proceso, no es aplicación nueva",
                "CivActs + IECM ofrecen evidencia concreta de incidencia institucional en gobernanza",
                "Monto significativo en USD — relevante para sostenibilidad financiera"
            ],
            en: [
                "Very high alignment: democratic governance + LATAM is Tinker's exact focus",
                "LOI already submitted — ALMex is in the process, not starting fresh",
                "CivActs + IECM offer concrete evidence of institutional governance advocacy",
                "Significant USD amount — relevant for financial sustainability"
            ]
        },
        watchPoints: {
            es: [
                "Proceso: si se recibe invitación a full proposal, respuesta debe ser ágil (30-60 días típico)",
                "Tinker valora rigor metodológico — documentar MEL de CivActs es precondición",
                "Riesgo político: Tinker es conservador en posicionamientos — evitar lenguaje confrontacional",
                "Seguimiento activo con Caroline Kronley recomendado — sin micro-presiones"
            ],
            en: [
                "Process: if invited to full proposal, response must be agile (typically 30-60 days)",
                "Tinker values methodological rigor — documenting CivActs MEL is a precondition",
                "Political risk: Tinker is conservative on positioning — avoid confrontational language",
                "Active follow-up with Caroline Kronley recommended — without micro-pressuring"
            ]
        },
        framingStrategy: {
            es: {
                headline: "Democracia desde las periferias: incidencia institucional y acción comunitaria en México",
                body: "Para Tinker: posicionar ALMex como facilitador de puentes entre comunidades excluidas e instituciones democráticas — no como organización confrontacional sino como actor técnico que traduce demandas comunitarias en insumos para la política pública. CivActs + IECM son el argumento central.",
                bullets: [
                    "Énfasis en metodología robusta y evidencia documentada (MEL)",
                    "Lenguaje de gobernanza, no de 'resistencia' — Tinker es cauteloso en política",
                    "Mostrar escalabilidad del modelo: CDMX → otros estados → potencial regional",
                    "Conectar con Estrategia LATAM: periferias urbanas como laboratorio democrático"
                ]
            },
            en: {
                headline: "Democracy from the Peripheries: institutional advocacy and community action in Mexico",
                body: "For Tinker: position ALMex as a bridge builder between excluded communities and democratic institutions — not a confrontational org but a technical actor translating community demands into policy inputs. CivActs + IECM are the central argument.",
                bullets: [
                    "Emphasis on robust methodology and documented evidence (MEL)",
                    "Governance language, not 'resistance' — Tinker is politically cautious",
                    "Show model scalability: CDMX → other states → potential regional",
                    "Connect to LATAM Strategy: urban peripheries as a democratic laboratory"
                ]
            }
        }
    },

    {
        id: 4,
        name: "Fondo Canadá · CFLI",
        sub: "Embajada de Canadá · Gobernanza inclusiva · Género",
        region: "mexico", regionLabel: "🇲🇽 México",
        align: "high", score: 65,
        status: "watch", statusLabel: "Monitoring", statusClass: "badge-monitor",
        deadline: "May 2026 (est.)", deadlineDate: "2026-05-01",
        amount: "~CAD 45K (~$580K MXN)",
        priority: false,
        contact: "Gabriela de la Peña · LinkedIn directo",
        note: "Ciclo anual mayo · CLOSED 2025 · Watch Q2 2026 · Género + gobernanza requerido",
        link: "grant.html?id=4",
        programs: ["CivActs", "IECM/PC", "mXc"],
        scoreBreakdown: {
            missionAlign: { score: 14, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 17, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 12, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 7, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 5, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 5, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 4, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: [
                "Alineación sólida: gobernanza + género + México es el perfil de CFLI",
                "Embajada de Canadá valora OSCs con track record documentado como ALMex",
                "mXc puede agregar un componente de género y migración al framing",
                "Monto manejable para un equipo pequeño — no requiere consorcio"
            ],
            en: [
                "Strong alignment: governance + gender + Mexico is CFLI's exact profile",
                "Canadian Embassy values OSCs with documented track records like ALMex",
                "mXc can add a gender and migration component to the framing",
                "Manageable amount for a small team — no consortium required"
            ]
        },
        watchPoints: {
            es: [
                "Género debe ser explícito en la propuesta — no implícito en el trabajo",
                "Barrera: el componente de género no es el centro de los programas actuales de ALMex",
                "Requiere contacto directo con Gabriela de la Peña para confirmar apertura del ciclo",
                "Preparar con anticipación — convocatoria puede abrirse sin previo aviso en Q2"
            ],
            en: [
                "Gender must be explicit in the proposal — not just implicit in the work",
                "Barrier: gender component is not central to current ALMex programs",
                "Requires direct contact with Gabriela de la Peña to confirm cycle opening",
                "Prepare in advance — call may open without advance notice in Q2"
            ]
        },
        framingStrategy: {
            es: {
                headline: "Gobernanza con perspectiva de género: participación ciudadana de mujeres y jóvenes en México",
                body: "Para CFLI: activar la dimensión de género que está presente en mXc (mujeres migrantes) y CivActs (liderazgo femenino en Yuguelito). El framing exitoso conecta gobernanza local → empoderamiento de mujeres → participación ciudadana → mecanismos institucionales.",
                bullets: [
                    "Protagonizar evidencia de participación de mujeres en CivActs Yuguelito",
                    "mXc: narrativas de mujeres migrantes como evidencia de liderazgo en situación de vulnerabilidad",
                    "Incluir perspectiva de género en el diseño de herramientas ciudadanas (IECM)",
                    "Presupuesto recomendado: actividades, materiales, consultoras externas con enfoque de género"
                ]
            },
            en: {
                headline: "Gender-Responsive Governance: women's and youth civic participation in Mexico",
                body: "For CFLI: activate the gender dimension present in mXc (migrant women) and CivActs (female leadership in Yuguelito). Successful framing connects local governance → women's empowerment → civic participation → institutional mechanisms.",
                bullets: [
                    "Feature evidence of women's participation in CivActs Yuguelito",
                    "mXc: migrant women's narratives as evidence of leadership in vulnerability",
                    "Include gender perspective in citizen toolkit design (IECM)",
                    "Budget: activities, materials, external consultants with gender expertise"
                ]
            }
        }
    },

    {
        id: 5,
        name: "UNESCO-Aschberg Programme 2026",
        sub: "Artists & Cultural Professionals · Track 2 CSO · Gobernanza cultural",
        region: "global", regionLabel: "🌐 Global",
        align: "medium", score: 62,
        status: "watch", statusLabel: "Próximo Ciclo", statusClass: "badge-monitor",
        deadline: "Feb 2027 (est.)", deadlineDate: "2027-02-01",
        amount: "up to $50K USD",
        priority: false,
        contact: "aschberg@unesco.org",
        note: "2026 cerrado · Preparar para ciclo 2027 · Precondición de planeación estratégica ALMex",
        link: "grant.html?id=5",
        programs: ["mXc"],
        scoreBreakdown: {
            missionAlign: { score: 12, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 10, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 11, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 7, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 7, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 7, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 6, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 2, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: [
                "mXc es exactamente el tipo de programa que Aschberg financia: arte + comunidad + cambio social",
                "Track 2 CSO permite a ALMex aplicar directamente sin necesidad de ser artista",
                "Gobernanza cultural es una línea estratégica emergente identificada en la planeación"
            ],
            en: [
                "mXc is exactly the type of program Aschberg funds: art + community + social change",
                "Track 2 CSO allows ALMex to apply directly without needing to be an artist",
                "Cultural governance is an emerging strategic line identified in planning"
            ]
        },
        watchPoints: {
            es: [
                "2026 cerrado — enfocarse en preparación para ciclo 2027",
                "Requiere documentar impacto de mXc 2025 con evidencia sólida de cambio narrativo",
                "Tensión: mXc involucró menores — resolver esta barrera antes de aplicar",
                "Línea de gobernanza cultural requiere desarrollo conceptual adicional en la estrategia"
            ],
            en: [
                "2026 closed — focus on preparation for 2027 cycle",
                "Requires documenting mXc 2025 impact with solid narrative change evidence",
                "Tension: mXc involved minors — resolve this barrier before applying",
                "Cultural governance line requires additional conceptual development in strategy"
            ]
        },
        framingStrategy: {
            es: {
                headline: "Artivismo para la incidencia: narrativas migrantes como herramienta de cambio cultural",
                body: "Para Aschberg: mXc como metodología de co-creación artística con personas en situación de movilidad — donde las canciones y testimonios son el producto, pero la incidencia narrativa y el cambio cultural son el objetivo. Conectar con el eje de gobernanza cultural que ALMex identifica como línea emergente.",
                bullets: [
                    "Documentar proceso creativo de mXc 2025 como evidencia para 2027",
                    "Desarrollar componente de gobernanza cultural en la propuesta conceptual",
                    "Resolver tensión menores vs. elegibilidad antes de la convocatoria 2027",
                    "Explorar alianza con actor cultural establecido para fortalecer la aplicación"
                ]
            },
            en: {
                headline: "Artivism for Advocacy: Migrant Narratives as Cultural Change Tools",
                body: "For Aschberg: mXc as a co-creation methodology with people in mobility situations — where songs and testimonies are the product, but narrative advocacy and cultural change are the goal. Connect with the cultural governance axis ALMex identifies as an emerging line.",
                bullets: [
                    "Document mXc 2025 creative process as evidence for 2027 cycle",
                    "Develop cultural governance component in the conceptual proposal",
                    "Resolve the minor/eligibility tension before the 2027 call",
                    "Explore alliance with established cultural actor to strengthen application"
                ]
            }
        }
    },

    {
        id: 6,
        name: "Alianza SURGE · FAM / FCP",
        sub: "Espacio cívico · Democracia desde la base · México",
        region: "mexico", regionLabel: "🇲🇽 México",
        align: "high", score: 60,
        status: "invite", statusLabel: "Por Recomendación", statusClass: "badge-invite",
        deadline: "2026 via Avina", deadlineDate: "2026-12-31",
        amount: "up to $30K USD",
        priority: false,
        contact: "Fortalecer rel. con Avina Foundation",
        note: "Solo por recomendación de Avina · Construir relación antes de aplicar",
        link: "grant.html?id=6",
        programs: ["CivActs"],
        scoreBreakdown: {
            missionAlign: { score: 14, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 16, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 11, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 6, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 5, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 5, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 2, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: ["Alta alineación: espacio cívico y democracia desde la base", "CivActs es evidencia directa de democracia comunitaria"],
            en: ["High alignment: civic space and grassroots democracy", "CivActs is direct evidence of community democracy"]
        },
        watchPoints: {
            es: ["Acceso solo vía Avina — priorizar construcción de relación en 2026", "Monto moderado — considera costo de inversión de tiempo vs. retorno"],
            en: ["Access only via Avina — prioritize relationship building in 2026", "Moderate amount — consider time investment cost vs. return"]
        },
        framingStrategy: {
            es: { headline: "Democracia comunitaria en las periferias", body: "CivActs como modelo de espacio cívico local funcional.", bullets: ["Relación Avina es la precondición", "Preparar en H2 2026"] },
            en: { headline: "Community Democracy in the Peripheries", body: "CivActs as a model of functional local civic space.", bullets: ["Avina relationship is the precondition", "Prepare for H2 2026"] }
        }
    },

    {
        id: 7,
        name: "Open Society Foundations",
        sub: "Derechos humanos · Gobernanza · Mayoría por invitación",
        region: "global", regionLabel: "🌐 Global + LATAM",
        align: "medium", score: 52,
        status: "invite", statusLabel: "Por Invitación", statusClass: "badge-invite",
        deadline: "Continuo", deadlineDate: "2026-12-31",
        amount: "$60K – $700K+",
        priority: false,
        contact: "latinamerica@opensocietyfoundations.org",
        note: "AL Global recibió $60K (2024) · Relación institucional existente — aprovechar",
        link: "grant.html?id=7",
        programs: ["CivActs", "IECM/PC"],
        scoreBreakdown: {
            missionAlign: { score: 13, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 10, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 10, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 5, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 5, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 4, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 4, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: {
            es: ["Relación directa vía AL Global — canal privilegiado de acceso", "Rango de montos muy amplio — potencial significativo"],
            en: ["Direct relationship via AL Global — privileged access channel", "Very wide funding range — significant potential"]
        },
        watchPoints: {
            es: ["Mayoría invitación directa — acceso no garantizado sin relación OSF-ALMex específica", "Activar a través de AL Global explícitamente"],
            en: ["Mostly direct invitation — access not guaranteed without specific OSF-ALMex relationship", "Activate through AL Global explicitly"]
        },
        framingStrategy: {
            es: { headline: "Democracia participativa e integridad pública en México", body: "Portafolio completo de ALMex: CivActs, IECM, Integrity como sistema integrado.", bullets: ["Activar vía AL Global", "Priorizar relación sobre aplicación directa"] },
            en: { headline: "Participatory Democracy and Public Integrity in Mexico", body: "ALMex's full portfolio: CivActs, IECM, Integrity as an integrated system.", bullets: ["Activate via AL Global", "Prioritize relationship over direct application"] }
        }
    },

    {
        id: 8,
        name: "Fondo Canadá · CFLI 2025 (cerrado)",
        sub: "Cycle 2025 cerrado · Referencia para 2026",
        region: "mexico", regionLabel: "🇲🇽 México",
        align: "high", score: 63,
        status: "closed", statusLabel: "Cerrado 2025", statusClass: "badge-closed",
        deadline: "Cycle 2025 pasado", deadlineDate: "2025-12-01",
        amount: "~CAD 45K",
        priority: false,
        contact: "Gabriela de la Peña",
        note: "Referencia: ganadores 2025 ya seleccionados · Ver CFLI 2026 (id:4)",
        link: "grant.html?id=8",
        programs: [],
        scoreBreakdown: {
            missionAlign: { score: 14, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 16, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 11, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 7, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 4, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 5, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 5, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: { es: ["Alta alineación histórica"], en: ["High historical alignment"] },
        watchPoints: { es: ["Ciclo cerrado — monitorear apertura 2026"], en: ["Closed cycle — monitor 2026 opening"] },
        framingStrategy: { es: { headline: "", body: "Ver CFLI 2026.", bullets: [] }, en: { headline: "", body: "See CFLI 2026.", bullets: [] } }
    },

    {
        id: 9,
        name: "People Powered · Accelerators",
        sub: "Democracia participativa · Digital · Alianzas",
        region: "global", regionLabel: "🌐 Global",
        align: "medium", score: 55,
        status: "watch", statusLabel: "Monitoring 2027", statusClass: "badge-monitor",
        deadline: "H1 2027 (est.)", deadlineDate: "2027-06-01",
        amount: "up to $25K USD",
        priority: false,
        contact: "peoplepowered.org/accelerators",
        note: "Cerrado dic 2025 · Monitorear siguiente ciclo · Alineado con IECM/PC",
        link: "grant.html?id=9",
        programs: ["IECM/PC"],
        scoreBreakdown: {
            missionAlign: { score: 12, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 10, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 11, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 7, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 5, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 5, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 4, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: { es: ["Alta alineación con democracia participativa y digital"], en: ["High alignment with participatory and digital democracy"] },
        watchPoints: { es: ["Ciclo cerrado — preparar para 2027"], en: ["Cycle closed — prepare for 2027"] },
        framingStrategy: { es: { headline: "Participación ciudadana digital en México", body: "IECM + plataforma PC como caso de uso.", bullets: ["Preparar con IECM como aliado"] }, en: { headline: "Digital Civic Participation in Mexico", body: "IECM + PC platform as use case.", bullets: ["Prepare with IECM as partner"] } }
    },

    {
        id: 10,
        name: "MacArthur Foundation",
        sub: "Cambio sistémico · Sin convocatoria abierta · Invitation only",
        region: "global", regionLabel: "🌐 Global",
        align: "low", score: 34,
        status: "invite", statusLabel: "Sin Convocatoria", statusClass: "badge-closed",
        deadline: "No open call", deadlineDate: "2026-12-31",
        amount: "Large grants",
        priority: false,
        contact: "macfound.fluxx.io/lois",
        note: "Trabajo en MX terminó 2020 · Sin presencia local · Solo LOI invitación · Bajo prioridad",
        link: "grant.html?id=10",
        programs: [],
        scoreBreakdown: {
            missionAlign: { score: 7, max: 20, label: "Mission Alignment", label_es: "Alineación de misión" },
            geography: { score: 6, max: 20, label: "Geography & Reach", label_es: "Geografía y alcance" },
            orgType: { score: 8, max: 15, label: "Org Type & Status", label_es: "Tipo y estatus org." },
            youth: { score: 3, max: 15, label: "Youth Engagement", label_es: "Trabajo con jóvenes" },
            timeline: { score: 3, max: 10, label: "Timeline Feasibility", label_es: "Viabilidad de plazo" },
            capacity: { score: 3, max: 10, label: "Org Capacity", label_es: "Capacidad interna" },
            values: { score: 3, max: 7, label: "Shared Values", label_es: "Valores compartidos" },
            risk: { score: 1, max: 3, label: "Risk (lower = better)", label_es: "Riesgo (menor = mejor)" }
        },
        strengths: { es: ["Montos potencialmente grandes"], en: ["Potentially large amounts"] },
        watchPoints: { es: ["Sin relación activa · Trabajo en MX discontinuado en 2020 · Prioridad baja"], en: ["No active relationship · MX work discontinued 2020 · Low priority"] },
        framingStrategy: { es: { headline: "", body: "Baja prioridad sin relación activa.", bullets: [] }, en: { headline: "", body: "Low priority without active relationship.", bullets: [] } }
    }
];

/* ============================================================
   SCORING MODEL — v4
   Baseline from planeación estratégica:
   - Programs: CivActs, Integrity, mXc, IECM/PC
   - Context: Filantropía contraída, competencia alta
   - Priority: grants alineados con sostenibilidad financiera
   ============================================================ */

window.SCORE_CONFIG = {
    dimensions: [
        { key: "missionAlign", weightPct: 20, tooltip_es: "Qué tan directamente el grant apoya los programas activos de ALMex (CivActs, Integrity, mXc, IECM/PC) y sus objetivos de sostenibilidad.", tooltip_en: "How directly the grant supports ALMex's active programs (CivActs, Integrity, mXc, IECM/PC) and sustainability goals." },
        { key: "geography", weightPct: 20, tooltip_es: "Preferencia por México y LATAM — penaliza grants solo globales o de regiones no prioritarias.", tooltip_en: "Preference for Mexico and LATAM — penalizes globally-only grants or non-priority regions." },
        { key: "orgType", weightPct: 15, tooltip_es: "Requisitos de tipo de organización: Donataria Autorizada, OSC mexicana, tamaño mínimo.", tooltip_en: "Org type requirements: Donataria Autorizada, Mexican CSO, minimum size." },
        { key: "youth", weightPct: 15, tooltip_es: "Requisito o preferencia por trabajo con jóvenes — crítico para Merced IDEAS 2026.", tooltip_en: "Requirement or preference for youth engagement — critical for Merced IDEAS 2026." },
        { key: "timeline", weightPct: 10, tooltip_es: "Factibilidad del plazo: ¿puede ALMex aplicar con la capacidad operativa actual?", tooltip_en: "Timeline feasibility: can ALMex apply with current operational capacity?" },
        { key: "capacity", weightPct: 10, tooltip_es: "Capacidad interna real: equipo de 4 personas, múltiples programas simultáneos, riesgo de burnout.", tooltip_en: "Real internal capacity: 4-person team, multiple simultaneous programs, burnout risk." },
        { key: "values", weightPct: 7, tooltip_es: "Alineación con valores de ALMex: no extractivo, no confrontacional, enfoque en comunidades.", tooltip_en: "Alignment with ALMex values: non-extractive, non-confrontational, community-centered." },
        { key: "risk", weightPct: 3, tooltip_es: "Riesgo combinado: reputacional, operativo, político. Menor puntaje = mayor riesgo.", tooltip_en: "Combined risk: reputational, operational, political. Lower score = higher risk." }
    ]
};
