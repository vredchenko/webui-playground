import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Health Beauty',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Health Beauty',
          '',
          '100,000+ icons by [Streamline](https://streamlinehq.com). Free under [CC Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (linkware).',
          '',
          'Showing 96px PNG variants in Regular styles.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StreamlineIconGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ambulance: Story = {
  args: {
    subcategoryName: "Ambulance",
    categoryPath: "health-beauty/ambulance",
    regularIcons: ["ambulance-call.png","ambulance-car.png","ambulance-cross.png","ambulance-helicopter.png","ambulance-human.png"],
    lightIcons: [],
  },
};

export const BandagesCasts: Story = {
  args: {
    subcategoryName: "Bandages Casts",
    categoryPath: "health-beauty/bandages-casts",
    regularIcons: ["bandage-finger-bleed.png","bandage-finger.png","bandage-leg-hanging-hospital.png","bandage-leg-hanging.png","bandage-leg.png","bandage-shoulder.png","bandage.png"],
    lightIcons: [],
  },
};

export const BeardShaving: Story = {
  args: {
    subcategoryName: "Beard Shaving",
    categoryPath: "health-beauty/beard-shaving",
    regularIcons: ["beard-style-mustache-1.png","beard-style-mustache.png","beard-style-razor.png","beard-style-shave.png","beard-style-shaving-machine.png","beard-style.png"],
    lightIcons: [],
  },
};

export const Blood: Story = {
  args: {
    subcategoryName: "Blood",
    categoryPath: "health-beauty/blood",
    regularIcons: ["blood-drop-elements.png","blood-drop-search.png","blood-drop-type-a.png","blood-drop-type-ab.png","blood-drop-type-b.png","blood-drop-type-negative.png","blood-drop-type-o.png","blood-drop-type-positive.png","blood-drop.png","blood-drops-positive.png"],
    lightIcons: [],
  },
};

export const Bodycare: Story = {
  args: {
    subcategoryName: "Bodycare",
    categoryPath: "health-beauty/bodycare",
    regularIcons: ["body-care-cream.png","body-care-eye-mask.png","body-care-lotion.png","body-care-mask.png","body-care-perfume-1.png","body-care-perfume.png","body-care-snail.png","body-care-soap.png","body-care-sun-cream.png","body-care-sun-lotion.png","body-care-toothbrush-paste.png","body-care-toothbrush.png","body-care-water-hand.png"],
    lightIcons: [],
  },
};

export const Brain: Story = {
  args: {
    subcategoryName: "Brain",
    categoryPath: "health-beauty/brain",
    regularIcons: ["brain-head-1.png","brain-head.png","brain-network.png","brain-open-skill.png"],
    lightIcons: [],
  },
};

export const Dentistry: Story = {
  args: {
    subcategoryName: "Dentistry",
    categoryPath: "health-beauty/dentistry",
    regularIcons: ["dentistry-tooth-brush.png","dentistry-tooth-check.png","dentistry-tooth-chipped-1.png","dentistry-tooth-chipped.png","dentistry-tooth-equipment.png","dentistry-tooth-exchange.png","dentistry-tooth-hook.png","dentistry-tooth-jaws.png","dentistry-tooth-mirror.png","dentistry-tooth-remove.png","dentistry-tooth-search.png","dentistry-tooth-shield-1.png","dentistry-tooth-shield.png","dentistry-tooth.png"],
    lightIcons: [],
  },
};

export const Dietetics: Story = {
  args: {
    subcategoryName: "Dietetics",
    categoryPath: "health-beauty/dietetics",
    regularIcons: ["diet-health.png","diet-scale.png","diet-waist-1.png","diet-waist.png"],
    lightIcons: [],
  },
};

export const DrugsMedication: Story = {
  args: {
    subcategoryName: "Drugs Medication",
    categoryPath: "health-beauty/drugs-medication",
    regularIcons: ["drugs-box.png","drugs-cannabis.png","drugs-pill.png","drugs-pills-box.png","drugs-powder.png","drugs-sheet.png","drugs-syrup.png","mortar-pestle.png","pill-clock.png","pill-laptop.png","pill.png"],
    lightIcons: [],
  },
};

export const FertilityPregnancy: Story = {
  args: {
    subcategoryName: "Fertility Pregnancy",
    categoryPath: "health-beauty/fertility-pregnancy",
    regularIcons: ["pregnancy-condom.png","pregnancy-eggs.png","pregnancy-sperm-1.png","pregnancy-sperm.png","pregnancy-ultrasound-baby.png","pregnancy-ultrasound.png","pregnancy-vgr.png"],
    lightIcons: [],
  },
};

export const Hair: Story = {
  args: {
    subcategoryName: "Hair",
    categoryPath: "health-beauty/hair",
    regularIcons: ["hair-skin-1.png","hair-skin.png","hair-under-skin.png"],
    lightIcons: [],
  },
};

export const HairDress: Story = {
  args: {
    subcategoryName: "Hair Dress",
    categoryPath: "health-beauty/hair-dress",
    regularIcons: ["hair-dress-barber.png","hair-dress-bobby-pin.png","hair-dress-brush.png","hair-dress-chair-1.png","hair-dress-chair.png","hair-dress-comb-1.png","hair-dress-comb.png","hair-dress-cut.png","hair-dress-round-brush.png","hair-dress-round-brush_1.png"],
    lightIcons: [],
  },
};

export const Hospital: Story = {
  args: {
    subcategoryName: "Hospital",
    categoryPath: "health-beauty/hospital",
    regularIcons: ["hospital-board.png","hospital-building-1.png","hospital-building.png","hospital-first-aid.png","hospital-house.png","hospital-shield.png","hospital-sign-circle.png","hospital-sign-square.png","hospital-sign.png"],
    lightIcons: [],
  },
};

export const HospitalBedrooms: Story = {
  args: {
    subcategoryName: "Hospital Bedrooms",
    categoryPath: "health-beauty/hospital-bedrooms",
    regularIcons: ["hospital-bedroom-graph.png","hospital-bedroom-nurse.png","hospital-bedroom.png","hospital-shower.png"],
    lightIcons: [],
  },
};

export const InsuranceProtection: Story = {
  args: {
    subcategoryName: "Insurance Protection",
    categoryPath: "health-beauty/insurance-protection",
    regularIcons: ["insurance-card.png","insurance-cheap.png","insurance-expensive.png","insurance-hand.png","insurance-hands.png","insurance-head.png","insurance-umbrella-heart.png"],
    lightIcons: [],
  },
};

export const Labatory: Story = {
  args: {
    subcategoryName: "Labatory",
    categoryPath: "health-beauty/labatory",
    regularIcons: ["laboratory-chromosome.png","laboratory-sample.png","laboratory-sperm.png"],
    lightIcons: [],
  },
};

export const LabatoryTests: Story = {
  args: {
    subcategoryName: "Labatory Tests",
    categoryPath: "health-beauty/labatory-tests",
    regularIcons: ["laboratory-test-blood-sugar.png","laboratory-test-blood.png","laboratory-test-blood=finger.png","laboratory-test-stool-cup-1.png","laboratory-test-stool-cup.png","laboratory-test-stool.png"],
    lightIcons: [],
  },
};

export const Makeup: Story = {
  args: {
    subcategoryName: "Makeup",
    categoryPath: "health-beauty/makeup",
    regularIcons: ["make-up-brush-set.png","make-up-brush.png","make-up-eye.png","make-up-hand-mirror.png","make-up-lipstick-1.png","make-up-lipstick.png","make-up-mascara-small.png","make-up-mascara.png","make-up-mirror-1.png","make-up-mirror.png","make-up-nail-polisher.png","make-up-powder-tap.png","make-up-table-mirror.png"],
    lightIcons: [],
  },
};

export const MedicalApps: Story = {
  args: {
    subcategoryName: "Medical Apps",
    categoryPath: "health-beauty/medical-apps",
    regularIcons: ["medical-app-laptop-1.png","medical-app-laptop.png","medical-app-smartphone-1.png","medical-app-smartphone-listen.png","medical-app-smartphone-touch.png","medical-app-smartphone.png","medical-app-tablet.png"],
    lightIcons: [],
  },
};

export const MedicalConditions: Story = {
  args: {
    subcategoryName: "Medical Conditions",
    categoryPath: "health-beauty/medical-conditions",
    regularIcons: ["medical-condition-cough.png","medical-condition-flu.png","medical-condition-head-dizziness.png","medical-condition-head-pain.png","medical-condition-sore-throat.png","medical-condition-throat-problem.png"],
    lightIcons: [],
  },
};

export const MedicalFiles: Story = {
  args: {
    subcategoryName: "Medical Files",
    categoryPath: "health-beauty/medical-files",
    regularIcons: ["medical-file.png","medical-folder.png","medical-notes.png"],
    lightIcons: [],
  },
};

export const MedicalInstruments: Story = {
  args: {
    subcategoryName: "Medical Instruments",
    categoryPath: "health-beauty/medical-instruments",
    regularIcons: ["medical-instrument-ambulance-bed-1.png","medical-instrument-ambulance-bed.png","medical-instrument-sampler.png","medical-instrument-scalpel-cut.png","medical-instrument-scalpel.png","medical-instrument-stethoscope.png","medical-instrument-syringe-1.png","medical-instrument-syringe.png","medical-instrument-tooth.png","medical-instrument-tweezers-2.png","medical-instrument-tweezers-3.png","medical-instrument-tweezers.png","medical-instrument-walking-aid.png","medical-instrument.png"],
    lightIcons: [],
  },
};

export const MedicalNanobots: Story = {
  args: {
    subcategoryName: "Medical Nanobots",
    categoryPath: "health-beauty/medical-nanobots",
    regularIcons: ["medical-nanobot-blood.png","medical-nanobot-heart.png","medical-nanobot-lungs.png","medical-nanobot-pill.png","medical-nanobot-search.png","medical-nanobot-syringe.png","medical-nanobots.png"],
    lightIcons: [],
  },
};

export const MedicalPersonnel: Story = {
  args: {
    subcategoryName: "Medical Personnel",
    categoryPath: "health-beauty/medical-personnel",
    regularIcons: ["medical-personnel-doctor.png","medical-personnel-hat.png","medical-personnel-nurse.png","medical-personnel.png"],
    lightIcons: [],
  },
};

export const MedicalSpecialties: Story = {
  args: {
    subcategoryName: "Medical Specialties",
    categoryPath: "health-beauty/medical-specialties",
    regularIcons: ["medical-specialty-back.png","medical-specialty-breathing.png","medical-specialty-broken-bone.png","medical-specialty-ear.png","medical-specialty-eye.png","medical-specialty-feet.png","medical-specialty-hearing-1.png","medical-specialty-hearing.png","medical-specialty-heart.png","medical-specialty-intestine.png","medical-specialty-knee-1.png","medical-specialty-knee.png","medical-specialty-liver.png","medical-specialty-lungs.png","medical-specialty-nose.png","medical-specialty-optometrist.png","medical-specialty-pregnancy.png","medical-specialty-rehabilitation.png","medical-specialty-skin.png","medical-specialty-stomach.png","medical-specialty-vertebra.png","medical-specialty.png"],
    lightIcons: [],
  },
};

export const MedicalSymbol: Story = {
  args: {
    subcategoryName: "Medical Symbol",
    categoryPath: "health-beauty/medical-symbol",
    regularIcons: ["medical-hospital-1.png","medical-hospital.png","medical-ribbon-cancer.png"],
    lightIcons: [],
  },
};

export const MedicalTechnologicAdvances: Story = {
  args: {
    subcategoryName: "Medical Technologic Advances",
    categoryPath: "health-beauty/medical-technologic-advances",
    regularIcons: ["technology-bandage-chip.png","technology-chip-hold.png","technology-hand-chip.png","technology-pill.png","technology-prosthetic-leg.png"],
    lightIcons: [],
  },
};

export const Monitoring: Story = {
  args: {
    subcategoryName: "Monitoring",
    categoryPath: "health-beauty/monitoring",
    regularIcons: ["monitor-heart-beat-search.png","monitor-heart-beat-touch.png","monitor-heart-beat.png","monitor-heart-desktop.png","monitor-heart-notes.png","monitor-heart-rate-1.png","monitor-heart-rate-up.png","monitor-heart-rate.png"],
    lightIcons: [],
  },
};

export const RadiologyScanner: Story = {
  args: {
    subcategoryName: "Radiology Scanner",
    categoryPath: "health-beauty/radiology-scanner",
    regularIcons: ["radiology-scan-doctor.png","radiology-scan-hand.png","radiology-scan-mri.png","radiology-scan.png","radiology-scanner.png","radiology-scanning.png"],
    lightIcons: [],
  },
};

export const Transfusions: Story = {
  args: {
    subcategoryName: "Transfusions",
    categoryPath: "health-beauty/transfusions",
    regularIcons: ["transfusion-bag-1.png","transfusion-bag-hang.png","transfusion-bag.png","transfusion-human.png","transfusion-water.png"],
    lightIcons: [],
  },
};

export const WaitingroomAppointment: Story = {
  args: {
    subcategoryName: "Waitingroom Appointment",
    categoryPath: "health-beauty/waitingroom-appointment",
    regularIcons: ["medical-room-clock-man.png","medical-room-clock-woman.png","medical-room-wait.png"],
    lightIcons: [],
  },
};
